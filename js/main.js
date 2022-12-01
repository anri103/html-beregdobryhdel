(function ($) {
    'use strict';

    // MENU

    $(function () {
        //caches a jQuery object containing the header element
        var header = $('#headerfixed');
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 500) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        });
    });

    $(function () {
        var body = $('body');
        var mobheader = $('#mobilemenu');
        var mobbutton = $('.burger');
        var iconbutton = $('#mobileheader .burger');

        mobbutton.click(function () {
            mobheader.toggleClass('show');
            body.toggleClass('menu-change');
            iconbutton.toggleClass('c');
        });
    });

    $(function () {
        var searchOverlay = $('.search-overlay');
        var searchButton = $('.search-modal-show');
        var searchForm = $('.inline-search-block');
        var searchClose = $('.search-close');

        searchButton.click(function () {
            searchForm.toggleClass('show');
            searchOverlay.toggleClass('show');
        });

        searchClose.click(function () {
            searchForm.removeClass('show');
            searchOverlay.removeClass('show');
        });

        searchOverlay.click(function () {
            searchForm.removeClass('show');
            searchOverlay.removeClass('show');
        });
    });


    // ScrollTop
    $(window).scroll(function() {
        if ( $(this).scrollTop() >= 100 ){
            $('#scrollToTop').addClass('visible animated rotateIn');
        } else {
            $('#scrollToTop').removeClass('visible animated rotateIn');
        }
    });

    $('#scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    // SLIDERS

    // Главная, блок "Партёры"
    $(function () {
        // store the slider in a local variable
        var $window = $(window),
            flexslider = { vars: {} };

        // tiny helper function to add breakpoints
        function getGridSize() {
            return (window.innerWidth < 600) ? 2 :
                (window.innerWidth < 900) ? 3 : 5;
        }

        $('.partners-flexslider').flexslider({
            animation: 'slide',
            directionNav: true,
            controlNav: false,
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 3500,
            animationSpeed: 500,
            itemWidth: 200,
            itemMargin: 15,
            // minItems: 2,
            // maxItems: 5,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize() // use function to pull in initial value
        });

        // check grid size on resize event
        $window.resize(function () {
            var gridSize = getGridSize();

            flexslider.vars.minItems = gridSize;
            flexslider.vars.maxItems = gridSize;
        });
    });

    // Как стать волонтёром 1
    $(function () {
        $('.how-flexslider-1').flexslider({
            animation: 'slide',
            directionNav: true,
            controlNav: false,
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 7000,
            animationSpeed: 500,
            customDirectionNav: $('.js-slider-1 .flexslider-custom-nav a')
        });
    });

    // Как стать волонтёром 2
    $(function () {
        $('.how-flexslider-2').flexslider({
            animation: 'slide',
            directionNav: true,
            controlNav: false,
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 7000,
            animationSpeed: 500,
            customDirectionNav: $('.js-slider-2 .flexslider-custom-nav a')
        });
    });

    // О нас
    $(function () {
        // The slider being synced must be initialized first
        $('#about-carousel').flexslider({
          animation: 'slide',
          directionNav: true,
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          itemWidth: 210,
          itemMargin: 16,
          customDirectionNav: $('#about-carousel .about-slider__custom-nav a'),
          asNavFor: '#about-slider'
        });
       
        $('#about-slider').flexslider({
          animation: 'slide',
          directionNav: true,
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          customDirectionNav: $('#about-slider .about-slider__custom-nav a'),
          sync: '#about-carousel'
        });
      });

})(jQuery);