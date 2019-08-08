$(document).on('ready pjax:scriptcomplete', function () {

    // Styles for the question header:
    var cssConf = {
        'background-color': '#337AB7',
        'border': '1px solid #e7e7e7',
        'color': '#fff'
    };

    // The element to be fixed
    var questionHeader = $('.question-title-container');
    // The container withinwhich the questionHeader is embedded.
    var container = $(".answer-container");
    // The navigation bar at the top of the survey
    var navbar = $('.navbar.navbar-default.navbar-fixed-top');

    // space between question header and survey navigation bar
    var stickyAdditionalSpace = 10;

    // Returns offset to top
    function getOffsetTop(e) {
        return e.offset().top;
    }

    function getPaddingTop(e) {
        return e.height();
    }

    var offsetTop = getOffsetTop(questionHeader);
    var paddingTop = getPaddingTop(navbar);

    function adjustWidth(e) {
        e.width(container.width());
    }

    function setCssFixed(e) {
        e.css('position', 'fixed');
        e.css('top', (paddingTop + stickyAdditionalSpace) + 'px');
        e.css('z-index', '100');
        $.each(cssConf, function (k, v) {
            e.css(k, v);
        });
    }

    function clearCssFixed(e) {
        e.css('position', '');
        e.css('top', '');
        e.css('z-index', '');
        $.each(cssConf, function (k, v) {
            e.css(k, '');
        });
    }

    // Handle page scrolling
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= offsetTop - paddingTop - stickyAdditionalSpace) {
            setCssFixed(questionHeader);
            adjustWidth(questionHeader);
        }
        else {
            clearCssFixed(questionHeader);
        }
    });

    // Handle window resize
    $(window).resize(
        function () {
            clearCssFixed(questionHeader);
            adjustWidth(questionHeader);
            offsetTop = getOffsetTop();
            paddingTop = getPaddingTop();
            setCssFixed(questionHeader);
        });
});
