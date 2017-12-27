function showHint(arg) {
        var el = $(arg).data('origin');
        var block = $(arg).parent();
        var distR = $(window).width() - ($(block).offset().left + $(block).width());
        var distEl = $(window).height() - (getDim(block) + $(block).height());
        var parent = $(block).parent();
        var distRP = $(window).width() - ($(parent).offset().left + $(parent).width());
        var distP = $(window).height() - (getDim(parent) + $(parent).height());
        var delta = distEl - distP;
        var deltaW = distR - distRP;

        function getDim(arg) {
            var scrollTop = $(window).scrollTop(),
            elementOffset = $(arg).offset().top,
            distance      = (elementOffset - scrollTop);
            return distance;
        }

        var dist = $(window).width()/2;
        if(500 > deltaW) {
            if(delta > 120) {
                $(arg).parent().append('<div class="js-hint" style="left:-100%; top: 0;"><img src="' + el + '"></div>');
            } else {
                $(arg).parent().append('<div class="js-hint" style="left:-100%; bottom: 0;"><img src="' + el + '"></div>');
            }
        } else {
            if(delta > 120) {
                $(arg).parent().append('<div class="js-hint" style="right:-100%; top: 0;"><img src="' + el + '"></div>');
            } else {
                $(arg).parent().append('<div class="js-hint" style="right:-100%; bottom: 0;"><img src="' + el + '"></div>');
            }
        }
    };
function hideHint(arg) {
    $('.js-hint').remove();
};

if(localStorage.getItem('totalPrice')) {
    $('.js-total-sum').empty();
    $('.js-total-sum').text(localStorage.getItem('totalPrice'));
}

