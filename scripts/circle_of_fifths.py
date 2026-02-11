#!/usr/bin/env python3
"""
Generate circle of fifths SVG visualization comparing traditional and new note systems.
"""

import math
import config

# Circle of fifths order (clockwise from top, starting at C)
circle_of_fifths_order = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F']

def generate_circle_of_fifths_comparison_svg(
    circle_radius=100,
    canvas_padding=config.canvas_padding,
    stroke_width=config.stroke_width,
    stroke_color=config.stroke_color,
    fill_color="none",
    spacing=30
):
    """
    Generate a circle of fifths comparison SVG with traditional on left, new notation on right.
    
    Args:
        circle_radius: Radius of each circle
        canvas_padding: Padding around the circles
        stroke_width: Width of circle stroke
        stroke_color: Color for strokes and text
        fill_color: Fill color for the circles
        spacing: Space between the two circles
    """
    
    # Canvas dimensions
    single_circle_size = circle_radius * 2
    canvas_width = (single_circle_size * 2) + spacing + (canvas_padding * 2)
    canvas_height = single_circle_size + (canvas_padding * 2)
    
    # Centers for both circles
    left_center_x = canvas_padding + circle_radius
    right_center_x = canvas_padding + single_circle_size + spacing + circle_radius
    center_y = canvas_padding + circle_radius
    
    # Text positioning radius (closer to the rim)
    text_radius = circle_radius * 0.85
    
    # SVG header
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{canvas_width}" height="{canvas_height}" viewBox="0 0 {canvas_width} {canvas_height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background canvas -->
  <rect x="0" y="0" width="{canvas_width}" height="{canvas_height}" fill="none"/>
  
  <!-- Left circle (traditional notation) -->
  <circle cx="{left_center_x}" cy="{center_y}" r="{circle_radius}" fill="{fill_color}" stroke="{stroke_color}" stroke-width="{stroke_width}"/>
  
  <!-- Right circle (new notation) -->
  <circle cx="{right_center_x}" cy="{center_y}" r="{circle_radius}" fill="{fill_color}" stroke="{stroke_color}" stroke-width="{stroke_width}"/>
  
  <!-- Traditional notation labels -->'''
    
    # Calculate font size based on circle size
    font_size = circle_radius * 0.15
    
    # Add traditional notation labels to left circle
    for i, note in enumerate(circle_of_fifths_order):
        angle_deg = (i * 30) - 90  # -90 to start at top
        angle_rad = math.radians(angle_deg)
        
        x = left_center_x + text_radius * math.cos(angle_rad)
        y = center_y + text_radius * math.sin(angle_rad)
        y_adjusted = y + font_size * 0.35
        
        svg += f'''
  <text x="{x}" y="{y_adjusted}" font-family="{config.font_family}" font-size="{font_size}" fill="{stroke_color}" text-anchor="middle" font-weight="{config.font_weight}">{note}</text>'''
    
    svg += '''
  
  <!-- New notation labels -->'''
    
    # Add new notation labels to right circle
    for i, note in enumerate(circle_of_fifths_order):
        angle_deg = (i * 30) - 90
        angle_rad = math.radians(angle_deg)
        
        x = right_center_x + text_radius * math.cos(angle_rad)
        y = center_y + text_radius * math.sin(angle_rad)
        y_adjusted = y + font_size * 0.35
        
        label = config.new_note_names.get(note, note)
        
        svg += f'''
  <text x="{x}" y="{y_adjusted}" font-family="{config.font_family}" font-size="{font_size}" fill="{stroke_color}" text-anchor="middle" font-weight="{config.font_weight}">{label}</text>'''
    
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

