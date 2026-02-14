#!/usr/bin/env python3
"""
Generate a minimalistic piano octave SVG with proper black key positioning.
In the top portion, all 12 keys (7 white + 5 black) are evenly spaced.
"""

import config

OCTAVE_WIDTH=400 
KEY_HEIGHT=200 
BLACK_KEY_HEIGHT_RATIO=0.65

def generate_piano_svg():
    
    # Calculate dimensions
    white_key_width = OCTAVE_WIDTH / 7
    black_key_height = KEY_HEIGHT * BLACK_KEY_HEIGHT_RATIO
    
    # In the top portion, all 12 semitones are evenly spaced
    semitone_width = OCTAVE_WIDTH / 12
    
    # Canvas dimensions
    canvas_width = (white_key_width * 7) + 2 * config.CANVAS_PADDING
    canvas_height = KEY_HEIGHT + 2 * config.CANVAS_PADDING
    
    # SVG header
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{canvas_width}" height="{canvas_height}" viewBox="0 0 {canvas_width} {canvas_height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background canvas -->
  <rect x="0" y="0" width="{canvas_width}" height="{canvas_height}" fill="none"/>
  
  <!-- White keys -->'''
    
    # White key positions and labels
    white_keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B']  
    for i, note in enumerate(white_keys):
        x = config.CANVAS_PADDING + i * white_key_width
        y = config.CANVAS_PADDING
        svg += f'''
  <rect x="{x}" y="{y}" width="{white_key_width}" height="{KEY_HEIGHT}" fill="none" stroke="{config.COLOR}" stroke-width="{config.STROKE_WIDTH}"/>  <!-- {note} -->'''
    
    svg += '''
  
  <!-- Black keys -->'''
    
    # Black key positions: C#=1, D#=3, F#=6, G#=8, A#=10 (semitone positions)
    black_key_positions = [-7, -5, -2, 0, 2]  # relatve to Ab in semitones 
    black_key_names = ['C#', 'D#', 'F#', 'G#', 'A#']
    Ab_position = config.CANVAS_PADDING + (white_key_width * 5)
    
    for pos, note in zip(black_key_positions, black_key_names):
        # Position black key at its semitone position, centered
        x = Ab_position + pos * semitone_width - semitone_width / 2
        y = config.CANVAS_PADDING
        svg += f'''
  <rect x="{x}" y="{y}" width="{semitone_width}" height="{black_key_height}" fill="{config.COLOR}" stroke="{config.COLOR}" stroke-width="{config.STROKE_WIDTH}"/>  <!-- {note} -->'''
    
    svg += '''
  
  <!-- White key labels -->'''
    
    # Add labels to white keys (black text)
    for i, note in enumerate(white_keys):
        x = config.CANVAS_PADDING + i * white_key_width + white_key_width / 2
        y = config.CANVAS_PADDING + KEY_HEIGHT - config.FONT_SIZE / 2
        label = config.NEW_NOTE_NAMES[note]
        svg += f'''
  <text x="{x}" y="{y}" font-family="{config.FONT_FAMILY}" font-size="{config.FONT_SIZE}" fill="{config.COLOR}" text-anchor="middle" font-weight="{config.FONT_WEIGHT}">{label}</text>'''
    
    svg += '''
  
  <!-- Black key labels -->'''
    
    # Add labels to black keys (white text)
    for pos, note in zip(black_key_positions, black_key_names):
        x = Ab_position + pos * semitone_width
        y = config.CANVAS_PADDING + black_key_height - config.FONT_SIZE / 2
        label = config.NEW_NOTE_NAMES[note]
        svg += f'''
  <text x="{x}" y="{y}" font-family="{config.FONT_FAMILY}" font-size="{config.FONT_SIZE}" fill="white" text-anchor="middle" font-weight="{config.FONT_WEIGHT}">{label}</text>'''
    
    svg += '''
</svg>'''
    
    return svg

def save_piano_svg(filename="piano-octave.svg", **kwargs):
    """Save the piano SVG to a file."""
    svg_content = generate_piano_svg(**kwargs)
    with open(filename, 'w') as f:
        f.write(svg_content)
    print(f"Piano SVG saved to {filename}")

if __name__ == "__main__":
    # Generate with default parameters
    save_piano_svg("/home/jonas/Projects/harmonic-system/scripts/piano-octave.svg")
    
    print("Generated piano SVGs with proper black key positioning!")
