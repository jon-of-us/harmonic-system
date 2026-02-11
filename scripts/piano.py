#!/usr/bin/env python3
"""
Generate a minimalistic piano octave SVG with proper black key positioning.
In the top portion, all 12 keys (7 white + 5 black) are evenly spaced.
"""

new_note_names = {
    'C': '4',
    'C#': '11',
    'D': '6',
    'D#': '1',
    'E': '8',
    'F': '3',
    'F#': '10',
    'G': '5',
    'G#': '0',
    'A': '7',
    'A#': '2',
    'B': '9'
}

def generate_piano_svg(
    octave_width=200,
    key_height=100, 
    black_key_height_ratio=0.65,
    canvas_padding=20,
    stroke_width=2,
    white_fill="none",
    black_fill="black",
    stroke_color="black"
):
    
    # Calculate dimensions
    white_key_width = octave_width / 7
    black_key_height = key_height * black_key_height_ratio
    
    # In the top portion, all 12 semitones are evenly spaced
    semitone_width = octave_width / 12
    
    # Canvas dimensions
    canvas_width = (white_key_width * 7) + 2 * canvas_padding
    canvas_height = key_height + 2 * canvas_padding
    
    # SVG header
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{canvas_width}" height="{canvas_height}" viewBox="0 0 {canvas_width} {canvas_height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background canvas -->
  <rect x="0" y="0" width="{canvas_width}" height="{canvas_height}" fill="none"/>
  
  <!-- White keys -->'''
    
    # White key positions and labels
    white_keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B']  
    for i, note in enumerate(white_keys):
        x = canvas_padding + i * white_key_width
        y = canvas_padding
        svg += f'''
  <rect x="{x}" y="{y}" width="{white_key_width}" height="{key_height}" fill="{white_fill}" stroke="{stroke_color}" stroke-width="{stroke_width}"/>  <!-- {note} -->'''
    
    svg += '''
  
  <!-- Black keys -->'''
    
    # Black key positions: C#=1, D#=3, F#=6, G#=8, A#=10 (semitone positions)
    black_key_positions = [-7, -5, -2, 0, 2]  # relatve to Ab in semitones 
    black_key_names = ['C#', 'D#', 'F#', 'G#', 'A#']
    Ab_position = canvas_padding + (white_key_width * 5)
    
    for pos, note in zip(black_key_positions, black_key_names):
        # Position black key at its semitone position, centered
        x = Ab_position + pos * semitone_width - semitone_width / 2
        y = canvas_padding
        svg += f'''
  <rect x="{x}" y="{y}" width="{semitone_width}" height="{black_key_height}" fill="{black_fill}" stroke-width="0"/>  <!-- {note} -->'''
    
    svg += '''
  
  <!-- White key labels -->'''
    
    # Add labels to white keys (black text)
    font_size = min(white_key_width * 0.4, key_height * 0.15)
    for i, note in enumerate(white_keys):
        x = canvas_padding + i * white_key_width + white_key_width / 2
        y = canvas_padding + key_height - font_size /2
        label = new_note_names[note]
        svg += f'''
  <text x="{x}" y="{y}" font-family="sans-serif" font-size="{font_size}" fill="{stroke_color}" text-anchor="middle" font-weight="bold">{label}</text>'''
    
    svg += '''
  
  <!-- Black key labels -->'''
    
    # Add labels to black keys (white text)
    for pos, note in zip(black_key_positions, black_key_names):
        x = Ab_position + pos * semitone_width
        y = canvas_padding + black_key_height - font_size / 2
        label = new_note_names[note]
        svg += f'''
  <text x="{x}" y="{y}" font-family="sans-serif" font-size="{font_size}" fill="white" text-anchor="middle" font-weight="bold">{label}</text>'''
    
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
