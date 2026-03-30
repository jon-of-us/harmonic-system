const HORIZONTAL_DISTANCE = 200;
const ROW_SHIFT = -HORIZONTAL_DISTANCE / 2;
const VERTICAL_DISTANCE = HORIZONTAL_DISTANCE * Math.sqrt(3) / 2;
const LINE_WIDTH = 50;
const PADDING = 120;
const TEXT_VERTICAL_ADJUSTMENT = 0.12;
const STORAGE_KEY = 'chord-icon-editor-settings-v1';

const DEFAULTS = {
  chord: { radius: 70, color: '#333333' },
  tonic: { radius: 90, color: '#bdbdbd' },
  bass: { radius: 70, color: '#333333', innerRadius: 27, innerColor: '#ffffff' },
  textSize: 34,
  textColor: '#111111',
  textFontFamily: 'Arial, sans-serif',
  textFontWeight: 400
};

const state = {
  points: [],
  showGrid: true,
  autoConnect: true,
  selectedType: 'chord',
  modeSettings: null,
  iconName: 'chord-icon',
  history: [],
  historyIndex: -1
};

const ui = {
  svg: document.getElementById('editorSvg'),
  pointTypeButtons: [...document.querySelectorAll('[data-point-type]')],
  radius: document.getElementById('radius'),
  fillColor: document.getElementById('fillColor'),
  innerRadius: document.getElementById('innerRadius'),
  innerColor: document.getElementById('innerColor'),
  labelText: document.getElementById('labelText'),
  labelSize: document.getElementById('labelSize'),
  labelColor: document.getElementById('labelColor'),
  labelFontFamily: document.getElementById('labelFontFamily'),
  labelFontWeight: document.getElementById('labelFontWeight'),
  iconName: document.getElementById('iconName'),
  clearAll: document.getElementById('clearAll'),
  downloadSvg: document.getElementById('downloadSvg'),
  undoBtn: document.getElementById('undoBtn'),
  redoBtn: document.getElementById('redoBtn'),
  pointList: document.getElementById('pointList'),
  showGrid: document.getElementById('showGrid'),
  autoConnect: document.getElementById('autoConnect')
};

function defaultModeSettings() {
  return {
    chord: {
      radius: DEFAULTS.chord.radius,
      color: DEFAULTS.chord.color,
      innerRadius: DEFAULTS.bass.innerRadius,
      innerColor: DEFAULTS.bass.innerColor,
      labelText: '',
      labelSize: DEFAULTS.textSize,
      labelColor: DEFAULTS.textColor,
      labelFontFamily: DEFAULTS.textFontFamily,
      labelFontWeight: DEFAULTS.textFontWeight
    },
    tonic: {
      radius: DEFAULTS.tonic.radius,
      color: DEFAULTS.tonic.color,
      innerRadius: DEFAULTS.bass.innerRadius,
      innerColor: DEFAULTS.bass.innerColor,
      labelText: '',
      labelSize: DEFAULTS.textSize,
      labelColor: DEFAULTS.textColor,
      labelFontFamily: DEFAULTS.textFontFamily,
      labelFontWeight: DEFAULTS.textFontWeight
    },
    bass: {
      radius: DEFAULTS.bass.radius,
      color: DEFAULTS.bass.color,
      innerRadius: DEFAULTS.bass.innerRadius,
      innerColor: DEFAULTS.bass.innerColor,
      labelText: '',
      labelSize: DEFAULTS.textSize,
      labelColor: DEFAULTS.textColor,
      labelFontFamily: DEFAULTS.textFontFamily,
      labelFontWeight: DEFAULTS.textFontWeight
    }
  };
}

function ensureNumber(value, fallback) {
  const parsed = Number(value);
  if (Number.isFinite(parsed)) {
    return parsed;
  }
  return fallback;
}

function normalizeModeSettings(raw) {
  const defaults = defaultModeSettings();
  if (!raw || typeof raw !== 'object') {
    return defaults;
  }

  for (const type of ['chord', 'tonic', 'bass']) {
    const source = raw[type] || {};
    defaults[type] = {
      radius: ensureNumber(source.radius, defaults[type].radius),
      color: typeof source.color === 'string' ? source.color : defaults[type].color,
      innerRadius: ensureNumber(source.innerRadius, defaults[type].innerRadius),
      innerColor: typeof source.innerColor === 'string' ? source.innerColor : defaults[type].innerColor,
      labelText: typeof source.labelText === 'string' ? source.labelText : defaults[type].labelText,
      labelSize: ensureNumber(source.labelSize, defaults[type].labelSize),
      labelColor: typeof source.labelColor === 'string' ? source.labelColor : defaults[type].labelColor,
      labelFontFamily: typeof source.labelFontFamily === 'string' ? source.labelFontFamily : defaults[type].labelFontFamily,
      labelFontWeight: ensureNumber(source.labelFontWeight, defaults[type].labelFontWeight)
    };
  }

  return defaults;
}

function savePersistentSettings() {
  const payload = {
    modeSettings: state.modeSettings,
    iconName: state.iconName
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadPersistentSettings() {
  state.modeSettings = defaultModeSettings();
  state.iconName = 'chord-icon';

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    state.modeSettings = normalizeModeSettings(parsed.modeSettings);
    if (typeof parsed.iconName === 'string' && parsed.iconName.trim()) {
      state.iconName = parsed.iconName.trim();
    }
  } catch {
    state.modeSettings = defaultModeSettings();
  }
}

function syncCurrentModeSettingsFromControls() {
  if (state.selectedType === 'erase') {
    return;
  }

  const target = state.modeSettings[state.selectedType];
  target.radius = ensureNumber(ui.radius.value, target.radius);
  target.color = ui.fillColor.value;
  target.innerRadius = ensureNumber(ui.innerRadius.value, target.innerRadius);
  target.innerColor = ui.innerColor.value;
  target.labelText = ui.labelText.value;
  target.labelSize = ensureNumber(ui.labelSize.value, target.labelSize);
  target.labelColor = ui.labelColor.value;
  target.labelFontFamily = ui.labelFontFamily.value.trim() || DEFAULTS.textFontFamily;
  target.labelFontWeight = ensureNumber(ui.labelFontWeight.value, target.labelFontWeight);
}

function applyModeSettingsToControls(type) {
  const settings = state.modeSettings[type];
  ui.radius.value = String(settings.radius);
  ui.fillColor.value = settings.color;
  ui.innerRadius.value = String(settings.innerRadius);
  ui.innerColor.value = settings.innerColor;
  ui.labelText.value = settings.labelText;
  ui.labelSize.value = String(settings.labelSize);
  ui.labelColor.value = settings.labelColor;
  ui.labelFontFamily.value = settings.labelFontFamily;
  ui.labelFontWeight.value = String(settings.labelFontWeight);
}

function getSafeIconName() {
  const cleaned = state.iconName
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9._-]/g, '');

  return cleaned || 'chord-icon';
}

function toGridPoint(row, col) {
  return {
    x: col * HORIZONTAL_DISTANCE + row * ROW_SHIFT,
    y: row * VERTICAL_DISTANCE
  };
}

function nearestCell(x, y) {
  const row = Math.round(y / VERTICAL_DISTANCE);
  const col = Math.round((x - row * ROW_SHIFT) / HORIZONTAL_DISTANCE);
  return { row, col };
}

function pointKey(row, col) {
  return `${row}:${col}`;
}

function getBounds() {
  if (state.points.length === 0) {
    return { minX: -300, maxX: 900, minY: -300, maxY: 900 };
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (const point of state.points) {
    const pos = toGridPoint(point.row, point.col);
    const r = point.radius;
    minX = Math.min(minX, pos.x - r);
    maxX = Math.max(maxX, pos.x + r);
    minY = Math.min(minY, pos.y - r);
    maxY = Math.max(maxY, pos.y + r);

    if (point.label) {
      const pad = point.labelSize * 0.7;
      minX = Math.min(minX, pos.x - pad);
      maxX = Math.max(maxX, pos.x + pad);
      minY = Math.min(minY, pos.y - pad);
      maxY = Math.max(maxY, pos.y + pad);
    }
  }

  return { minX, maxX, minY, maxY };
}

function render() {
  const bounds = getBounds();
  const width = Math.max(300, bounds.maxX - bounds.minX + PADDING * 2);
  const height = Math.max(300, bounds.maxY - bounds.minY + PADDING * 2);
  const offsetX = PADDING - bounds.minX;
  const offsetY = PADDING - bounds.minY;

  ui.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  ui.svg.innerHTML = buildMarkup(width, height, offsetX, offsetY, true);
  renderPointList();
  syncHistoryButtons();
}

function isConnected(a, b) {
  if (a.kind !== 'chord' || b.kind !== 'chord') {
    return false;
  }
  const pa = toGridPoint(a.row, a.col);
  const pb = toGridPoint(b.row, b.col);
  const dx = pb.x - pa.x;
  const dy = pb.y - pa.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  return dist < 1.5 * HORIZONTAL_DISTANCE;
}

function gridMarkup(width, height, offsetX, offsetY) {
  if (!state.showGrid) {
    return '';
  }

  let markup = '';
  for (let row = -12; row <= 12; row += 1) {
    for (let col = -12; col <= 12; col += 1) {
      const p = toGridPoint(row, col);
      const x = p.x + offsetX;
      const y = p.y + offsetY;
      if (x >= -30 && x <= width + 30 && y >= -30 && y <= height + 30) {
        markup += `<circle cx="${x}" cy="${y}" r="7" fill="#ececec" />`;
      }
    }
  }
  return markup;
}

function buildMarkup(width, height, offsetX, offsetY, withGrid) {
  const lines = [];
  if (state.autoConnect) {
    for (let i = 0; i < state.points.length; i += 1) {
      for (let j = i + 1; j < state.points.length; j += 1) {
        const a = state.points[i];
        const b = state.points[j];
        if (!isConnected(a, b)) {
          continue;
        }
        const pa = toGridPoint(a.row, a.col);
        const pb = toGridPoint(b.row, b.col);
        lines.push(`<line x1="${pa.x + offsetX}" y1="${pa.y + offsetY}" x2="${pb.x + offsetX}" y2="${pb.y + offsetY}" stroke="${DEFAULTS.chord.color}" stroke-width="${LINE_WIDTH}" />`);
      }
    }
  }

  const tonicCircles = [];
  const foregroundCircles = [];
  const bassInnerCircles = [];
  const labels = [];

  for (const point of state.points) {
    const pos = toGridPoint(point.row, point.col);
    const x = pos.x + offsetX;
    const y = pos.y + offsetY;
    const textY = y + point.labelSize * TEXT_VERTICAL_ADJUSTMENT;

    if (point.kind === 'tonic') {
      tonicCircles.push(`<circle cx="${x}" cy="${y}" r="${point.radius}" fill="${point.color}" />`);
    } else {
      foregroundCircles.push(`<circle cx="${x}" cy="${y}" r="${point.radius}" fill="${point.color}" />`);
    }

    if (point.kind === 'bass') {
      bassInnerCircles.push(`<circle cx="${x}" cy="${y}" r="${point.innerRadius}" fill="${point.innerColor}" />`);
    }

    if (point.label) {
      labels.push(`<text x="${x}" y="${textY}" fill="${point.labelColor}" font-size="${point.labelSize}" font-family="${escapeXml(point.labelFontFamily)}" font-weight="${point.labelFontWeight}" text-anchor="middle" dominant-baseline="middle">${escapeXml(point.label)}</text>`);
    }
  }

  const grid = withGrid ? gridMarkup(width, height, offsetX, offsetY) : '';
  return `${grid}${tonicCircles.join('')}${lines.join('')}${foregroundCircles.join('')}${bassInnerCircles.join('')}${labels.join('')}`;
}

function escapeXml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function updateControlsForType(type) {
  for (const btn of ui.pointTypeButtons) {
    btn.classList.toggle('isActive', btn.dataset.pointType === type);
  }

  const isErase = type === 'erase';
  ui.radius.disabled = isErase;
  ui.fillColor.disabled = isErase;
  ui.innerRadius.disabled = isErase || type !== 'bass';
  ui.innerColor.disabled = isErase || type !== 'bass';
  ui.labelText.disabled = isErase;
  ui.labelSize.disabled = isErase;
  ui.labelColor.disabled = isErase;
  ui.labelFontFamily.disabled = isErase;
  ui.labelFontWeight.disabled = isErase;

  if (!isErase) {
    applyModeSettingsToControls(type);
  }
}

function addOrUpdatePoint(row, col) {
  const kind = state.selectedType;
  const key = pointKey(row, col);
  const nextPoint = {
    key,
    row,
    col,
    kind,
    radius: Number(ui.radius.value),
    color: ui.fillColor.value,
    innerRadius: Number(ui.innerRadius.value),
    innerColor: ui.innerColor.value,
    label: ui.labelText.value.trim(),
    labelSize: Number(ui.labelSize.value),
    labelColor: ui.labelColor.value,
    labelFontFamily: ui.labelFontFamily.value.trim() || DEFAULTS.textFontFamily,
    labelFontWeight: Number(ui.labelFontWeight.value) || DEFAULTS.textFontWeight
  };

  const existingIndex = state.points.findIndex((p) => p.key === key && p.kind === kind);
  if (existingIndex >= 0) {
    state.points[existingIndex] = nextPoint;
  } else {
    state.points.push(nextPoint);
  }
}

function removePointAt(row, col) {
  const key = pointKey(row, col);
  state.points = state.points.filter((p) => p.key !== key);
}

function snapshotPoints() {
  return JSON.stringify(state.points);
}

function pushHistory() {
  const snapshot = snapshotPoints();
  const current = state.history[state.historyIndex];
  if (snapshot === current) {
    return;
  }

  state.history = state.history.slice(0, state.historyIndex + 1);
  state.history.push(snapshot);
  state.historyIndex = state.history.length - 1;

  if (state.history.length > 200) {
    state.history.shift();
    state.historyIndex -= 1;
  }
}

function syncHistoryButtons() {
  ui.undoBtn.disabled = state.historyIndex <= 0;
  ui.redoBtn.disabled = state.historyIndex >= state.history.length - 1;
}

function undo() {
  if (state.historyIndex <= 0) {
    return;
  }
  state.historyIndex -= 1;
  state.points = JSON.parse(state.history[state.historyIndex]);
  render();
}

function redo() {
  if (state.historyIndex >= state.history.length - 1) {
    return;
  }
  state.historyIndex += 1;
  state.points = JSON.parse(state.history[state.historyIndex]);
  render();
}

function commitAndRender() {
  pushHistory();
  render();
}

function renderPointList() {
  const sorted = [...state.points].sort((a, b) => {
    if (a.row !== b.row) return a.row - b.row;
    if (a.col !== b.col) return a.col - b.col;
    return a.kind.localeCompare(b.kind);
  });

  ui.pointList.innerHTML = sorted
    .map((p) => `<li>${p.kind} @ (${p.row}, ${p.col}) ${p.label ? `"${escapeXml(p.label)}"` : ''}</li>`)
    .join('');
}

function onSvgClick(event) {
  const rect = ui.svg.getBoundingClientRect();
  const vb = ui.svg.viewBox.baseVal;
  const x = ((event.clientX - rect.left) / rect.width) * vb.width + vb.x;
  const y = ((event.clientY - rect.top) / rect.height) * vb.height + vb.y;

  const bounds = getBounds();
  const offsetX = PADDING - bounds.minX;
  const offsetY = PADDING - bounds.minY;
  const cell = nearestCell(x - offsetX, y - offsetY);

  if (state.selectedType === 'erase' || event.shiftKey) {
    removePointAt(cell.row, cell.col);
  } else {
    addOrUpdatePoint(cell.row, cell.col);
  }

  commitAndRender();
}

function downloadSvg() {
  const bounds = getBounds();
  const width = Math.max(300, bounds.maxX - bounds.minX + PADDING * 2);
  const height = Math.max(300, bounds.maxY - bounds.minY + PADDING * 2);
  const offsetX = PADDING - bounds.minX;
  const offsetY = PADDING - bounds.minY;
  const body = buildMarkup(width, height, offsetX, offsetY, false);
  const svgDoc = `<svg class="chord-icon" viewBox="0 0 ${width} ${height}" data-w="${width}" data-h="${height}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

  const blob = new Blob([svgDoc], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${getSafeIconName()}.svg`;
  anchor.click();
  URL.revokeObjectURL(url);
}

ui.svg.addEventListener('click', onSvgClick);
for (const btn of ui.pointTypeButtons) {
  btn.addEventListener('click', () => {
    syncCurrentModeSettingsFromControls();
    savePersistentSettings();
    state.selectedType = btn.dataset.pointType;
    updateControlsForType(state.selectedType);
  });
}

for (const input of [
  ui.radius,
  ui.fillColor,
  ui.innerRadius,
  ui.innerColor,
  ui.labelText,
  ui.labelSize,
  ui.labelColor,
  ui.labelFontFamily,
  ui.labelFontWeight
]) {
  input.addEventListener('input', () => {
    syncCurrentModeSettingsFromControls();
    savePersistentSettings();
  });
}

ui.iconName.addEventListener('input', () => {
  state.iconName = ui.iconName.value;
  savePersistentSettings();
});

ui.clearAll.addEventListener('click', () => {
  state.points = [];
  commitAndRender();
});
ui.downloadSvg.addEventListener('click', downloadSvg);
ui.showGrid.addEventListener('change', () => {
  state.showGrid = ui.showGrid.checked;
  render();
});
ui.autoConnect.addEventListener('change', () => {
  state.autoConnect = ui.autoConnect.checked;
  render();
});
ui.undoBtn.addEventListener('click', undo);
ui.redoBtn.addEventListener('click', redo);

document.addEventListener('keydown', (event) => {
  const cmdOrCtrl = event.metaKey || event.ctrlKey;
  if (!cmdOrCtrl) {
    return;
  }

  if (event.key.toLowerCase() === 'z' && !event.shiftKey) {
    event.preventDefault();
    undo();
    return;
  }

  if (event.key.toLowerCase() === 'y' || (event.key.toLowerCase() === 'z' && event.shiftKey)) {
    event.preventDefault();
    redo();
  }
});

pushHistory();
loadPersistentSettings();
ui.iconName.value = state.iconName;
updateControlsForType(state.selectedType);
render();
