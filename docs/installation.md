# Installation Guide

## Table of Contents
- [WordPress Installation](#wordpress-installation)
- [CDN Installation](#cdn-installation)
- [Manual Installation](#manual-installation)
- [Package Manager Installation](#package-manager-installation)

## WordPress Installation

### Method 1: Using functions.php
Add this code to your theme's `functions.php`:

```php
function enqueue_logo_carousel_assets() {
    wp_enqueue_style('logo-carousel', 'https://cdn.jsdelivr.net/gh/margabagus/logo-carousel@main/dist/css/logo-carousel.min.css', array(), '1.0.0');
    wp_enqueue_script('logo-carousel', 'https://cdn.jsdelivr.net/gh/margabagus/logo-carousel@main/dist/js/logo-carousel.min.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_logo_carousel_assets');

### Method 2: Local Installation
1. Download the latest release
2. Upload to your WordPress theme directory
3. Add to 'functions.php' in your theme:

```php
function enqueue_logo_carousel_assets() {
    wp_enqueue_style('logo-carousel', get_stylesheet_directory_uri() . '/assets/logo-carousel/css/logo-carousel.min.css', array(), '1.0.0');
    wp_enqueue_script('logo-carousel', get_stylesheet_directory_uri() . '/assets/logo-carousel/js/logo-carousel.min.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_logo_carousel_assets');

## CDN Installation
jsDelivr

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/margabagus/logo-carousel@main/dist/css/logo-carousel.min.css">
<script src="https://cdn.jsdelivr.net/gh/margabagus/logo-carousel@main/dist/js/logo-carousel.min.js"></script>

## Manual Installation
1. Download the latest release from GitHub
2. Extract files to your project directory
3. Include in your HTML:

```html
<link rel="stylesheet" href="path/to/logo-carousel.min.css">
<script src="path/to/logo-carousel.min.js"></script>

## Troubleshooting

### Common Issues

1. jQuery not found
Ensure jQuery is loaded before logo-carousel.js

2. Styles not applying
Check if CSS file is properly loaded

3. Animation not working
Verify JavaScript console for errors

