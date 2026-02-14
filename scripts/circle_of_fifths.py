#!/usr/bin/env python3
"""
Generate circle of fifths SVG visualization comparing traditional and new note systems.
"""

import math
import config

# Circle of fifths order (clockwise from top, starting at C)
CIRCLE_OF_FIFTH_ORDER = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F']
CIRCLE_RADIUS=100
SPACING=60

def generate_circle_of_fifths_comparison_svg(
):
    
    # Canvas dimensions
    single_circle_size = CIRCLE_RADIUS * 2
    canvas_width = (single_circle_size * 2) + SPACING + (config.CANVAS_PADDING * 2)
    canvas_height = single_circle_size + (config.CANVAS_PADDING * 2)
    
    # Centers for both circles
    left_center_x = config.CANVAS_PADDING + CIRCLE_RADIUS
    right_center_x = config.CANVAS_PADDING + single_circle_size + SPACING + CIRCLE_RADIUS
    center_y = config.CANVAS_PADDING + CIRCLE_RADIUS
    
    # Text positioning radius (closer to the rim)
    text_radius = CIRCLE_RADIUS * 0.85
    
    # SVG header
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{canvas_width}" height="{canvas_height}" viewBox="0 0 {canvas_width} {canvas_height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background canvas -->
  <rect x="0" y="0" width="{canvas_width}" height="{canvas_height}" fill="none"/>
  
  <!-- Left circle (traditional notation) -->
  <circle cx="{left_center_x}" cy="{center_y}" r="{CIRCLE_RADIUS}" fill="none" stroke="{config.COLOR}" stroke-width="{config.STROKE_WIDTH}"/>
  
  <!-- Right circle (new notation) -->
  <circle cx="{right_center_x}" cy="{center_y}" r="{CIRCLE_RADIUS}" fill="none" stroke="{config.COLOR}" stroke-width="{config.STROKE_WIDTH}"/>
  
  <!-- Arrow between circles -->
  <text x="{(left_center_x + right_center_x) / 2}" y="{center_y + config.FONT_SIZE * 0.5}" font-family="{config.FONT_FAMILY}" font-size="{config.FONT_SIZE * 2}" fill="{config.COLOR}" text-anchor="middle" font-weight="{config.FONT_WEIGHT}">⇒</text>
  
  <!-- Traditional notation labels -->'''
    
    
    # Add traditional notation labels to left circle
    for i, note in enumerate(CIRCLE_OF_FIFTH_ORDER):
        angle_deg = (i * 30) - 90  # -90 to start at top
        angle_rad = math.radians(angle_deg)
        
        x = left_center_x + text_radius * math.cos(angle_rad)
        y = center_y + text_radius * math.sin(angle_rad)
        y_adjusted = y + config.FONT_SIZE * 0.35
        
        svg += f'''
  <text x="{x}" y="{y_adjusted}" font-family="{config.FONT_FAMILY}" font-size="{config.FONT_SIZE}" fill="{config.COLOR}" text-anchor="middle" font-weight="{config.FONT_WEIGHT}">{note}</text>'''
    
    svg += '''
  
  <!-- New notation labels -->'''
    
    # Add new notation labels to right circle
    for i, note in enumerate(CIRCLE_OF_FIFTH_ORDER):
        angle_deg = (i * 30) - 90
        angle_rad = math.radians(angle_deg)
        
        x = right_center_x + text_radius * math.cos(angle_rad)
        y = center_y + text_radius * math.sin(angle_rad)
        y_adjusted = y + config.FONT_SIZE * 0.35
        
        label = config.NEW_NOTE_NAMES.get(note, note)
        
        svg += f'''
  <text x="{x}" y="{y_adjusted}" font-family="{config.FONT_FAMILY}" font-size="{config.FONT_SIZE}" fill="{config.COLOR}" text-anchor="middle" font-weight="{config.FONT_WEIGHT}">{label}</text>'''
    
    svg += '''
</svg>'''
    
    return svg

def save_circle_of_fifths_svg(filename, **kwargs):
    """Save the circle of fifths SVG to a file."""
    svg_content = generate_circle_of_fifths_comparison_svg(**kwargs)
    with open(filename, 'w') as f:
        f.write(svg_content)
    print(f"Circle of fifths comparison SVG saved to {filename}")

if __name__ == "__main__":
    # Generate comparison with both notations
    save_circle_of_fifths_svg(
        "/home/jonas/Projects/harmonic-system/scripts/circle-of-fifths.svg"
    )
    
    print("Generated circle of fifths comparison SVG!")

