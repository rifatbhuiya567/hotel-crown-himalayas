(function($) {
    "use strict";

    $(window).on('scroll', function () {
        let scrolling = $(this).scrollTop();
        
        if (scrolling > 50) {
            $('.main-header').addClass('sticky-header');
        } else {
            $('.main-header').removeClass('sticky-header');
        }

        if (scrolling > 120) {
            $('.ea').show(500);
        } else {
            $('.ea').hide(500);
        }

        if (scrolling > 200) {
            $('.btt').show(500);
        } else {
            $('.btt').hide(500);
        }
    });

    $('.btt').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })

    const d = new Date();
    let year = d.getFullYear();
    $("#currentYear").html(year);
})(jQuery);