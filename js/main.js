(function (window, $) {

    $(function () {


        $('.ripple').on('click', function (event) {
            event.preventDefault();

            var $div = $('<div/>'),
                btnOffset = $(this).offset(),
                xPos = event.pageX,
                yPos = event.pageY;



            $div.addClass('ripple-effect');
            var $ripple = $(".ripple-effect");

            $ripple.css("height", $(this).height() / 2);
            $ripple.css("width", $(this).height() / 2);
            var toppos = yPos - ($(this).height() / 2)
            $div
                .css({
                    'top': toppos - 40,
                    'left': xPos - 30,
                    'background': $(this).data("ripple-colour"),
                })
                .appendTo($(this));

            window.setTimeout(function () {
                $div.remove();
            }, 1500);
        });

    });

})(window, jQuery);

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 680) {
        document.getElementById('drawer').setAttribute('style', 'margin: 0;');
        document.getElementById('drawer-off').setAttribute('style', 'display: none;');
    } else {
        document.getElementById('drawer').setAttribute('style', 'margin-left: calc(-100% - 64px);');
    }
});

function expandMore() {
    document.getElementById('text').setAttribute('class', 'expanded');
    document.getElementById('expand_more').setAttribute('style', 'display: none;');
    document.getElementById('expand_less').setAttribute('style', 'display: block;');
}

function expandLess() {
    document.getElementById('text').setAttribute('class', 'collapsed');
    document.getElementById('expand_more').setAttribute('style', 'display: block;');
    document.getElementById('expand_less').setAttribute('style', 'display: none;');
}

function showDrawer() {
    document.getElementById('drawer').setAttribute('style', 'margin: 0;');
    document.getElementById('drawer-off').setAttribute('style', 'display: inline-block');
}

function hideDrawer() {
    document.getElementById('drawer').setAttribute('style', 'margin-left: calc(-100% - 64px);');
    document.getElementById('drawer-off').setAttribute('style', 'display: none;');
}