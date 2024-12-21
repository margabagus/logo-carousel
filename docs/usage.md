# Usage Guide

## Basic Usage

### HTML Structure
```html
<div class="logo-carousel">
    <div class="logo-container">
        <div class="logo-slide">
            <img src="path/to/logo.png" alt="Logo">
        </div>
    </div>
</div>

## Wordpress Implementation

### Using Shorcode

[logo_carousel]

### Using PHP

echo do_shortcode('[logo_carousel]');

### Divi Integration

## Using Code Module

1. Add new Code Module
2. Paste basic HTML structure:

```html
<div class="logo-carousel">
    <div class="logo-container">
        <div class="logo-slide">
            <img src="path/to/logo.png" alt="Logo">
        </div>
    </div>
</div>

### CSS Customization

```css
.logo-slide {
    width: 120px;
    height: 120px;
}

.logo-container {
    animation-duration: 80s;
}

