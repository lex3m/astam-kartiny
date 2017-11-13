 var globalW = 40; 
 var globalKoef = globalW/5; 

(function () {

    var selector = '[data-rangeSlider]',
        elements = document.querySelectorAll(selector);

    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;
    }

    for (var i = elements.length - 1; i >= 0; i--) {
        valueOutput(elements[i]);
    }

    Array.prototype.slice.call(document.querySelectorAll('input[type="range"]')).forEach(function (el) {
        el.addEventListener('input', function (e) {
            valueOutput(e.target);
        }, false);
    });









    // Basic rangeSlider initialization
    rangeSlider.create(elements, {

        // Callback function
        onInit: function () {
        },

        // Callback function
        onSlideStart: function (value, percent, position) {
            //console.info('onSlideStart', 'value: ' + value, 'percent: ' + percent, 'position: ' + position);
        },

        // Callback function
        onSlide: function (value, percent, position) {
            //console.log('onSlide', 'value: ' + value, 'percent: ' + percent, 'position: ' + position);
            var digit = value/20;
            globalKoef = globalW/digit;
            var ar = [];
            for(var i = 1; i < 21; i++) {
                ar.push(Math.round(digit*i));
            }
            console.log(ar);
            $('.js-ruler-gor').empty();
            $('.js-ruler-ver').empty();
            for(var i = 1, len = 22; i < len; i++){
                $('.js-ruler-gor').append('<div class="tm-ruler rul'+i+'"><span>'+ ar[i-1] +'</span></div>');
                if(i < 14){
                    $('.js-ruler-ver').append('<div class="tm-ruler rul'+i+'"><span>'+ ar[i-1] +'</span></div>');
                }
            }
        },

        // Callback function
        onSlideEnd: function (value, percent, position) {
            //console.warn('onSlideEnd', 'value: ' + value, 'percent: ' + percent, 'position: ' + position);
        }
    });



})();