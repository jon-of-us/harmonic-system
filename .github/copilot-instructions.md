# Copilot instructions for harmonic-system

## Repository state
- Main documentation is in [README.md](README.md).
- A minimal browser-based editor exists in [icon-editor/index.html](icon-editor/index.html) with supporting files [icon-editor/app.js](icon-editor/app.js) and [icon-editor/styles.css](icon-editor/styles.css).

## Architecture and components
- The icon editor is a static client-side tool with no build step.
- Rendering and SVG export logic live in [icon-editor/app.js](icon-editor/app.js).

## Workflows and commands
- No build system is required for the icon editor.
- Run by opening [icon-editor/index.html](icon-editor/index.html) in a browser.

## Conventions and patterns
- Keep tools in this repository dependency-free unless there is a clear need for external packages.
- If new workflows are introduced, document them in [README.md](README.md) and this file.

## Integrations and dependencies
- The icon editor has no external runtime dependencies.

## When adding files
- Prefer placing source under a standard top-level directory (e.g., src/) and document it here.
- Update this file when new workflows, components, or dependencies are introduced.
