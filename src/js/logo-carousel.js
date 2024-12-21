/**
 * Logo Carousel
 * Version: 1.0.0
 * Author: Marga Bagus
 * License: MIT
 * https://github.com/margabagus/logo-carousel
 */

(function($) {
    'use strict';

    // Logo Carousel Class
    var LogoCarousel = function(element, options) {
        this.$element = $(element);
        this.$container = this.$element.find('.logo-container');
        this.$slides = this.$element.find('.logo-slide');
        
        // Default options
        this.options = $.extend({}, {
            autoplay: true,
            speed: 100,
            pauseOnHover: true
        }, options);

        this.init();
    };

    // Initialize plugin
    LogoCarousel.prototype.init = function() {
        // Clone slides for continuous effect
        this.$slides.clone().appendTo(this.$container);

        // Initialize hover events if enabled
        if (this.options.pauseOnHover) {
            this.initHoverEvents();
        }

        // Initialize responsive behavior
        this.initResponsive();
    };

    // Handle hover events
    LogoCarousel.prototype.initHoverEvents = function() {
        var self = this;
        
        this.$element.hover(
            function() {
                self.$container.css('animation-play-state', 'paused');
            },
            function() {
                self.$container.css('animation-play-state', 'running');
            }
        );
    };

    // Handle responsive behavior
    LogoCarousel.prototype.initResponsive = function() {
        var self = this;
        
        $(window).on('resize', function() {
            // Add responsive logic if needed
        });
    };

    // jQuery plugin definition
    $.fn.logoCarousel = function(options) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('logoCarousel');
            
            if (!data) {
                $this.data('logoCarousel', 
                    new LogoCarousel(this, options)
                );
            }
        });
    };

    // Auto-initialize on DOM ready
    $(document).ready(function() {
        $('.logo-carousel').each(function() {
            var $carousel = $(this);
            var options = {
                autoplay: $carousel.data('autoplay') !== false,
                speed: $carousel.data('speed') || 100,
                pauseOnHover: $carousel.data('pause-hover') !== false
            };
            
            $(this).logoCarousel(options);
        });
    });

})(jQuery);