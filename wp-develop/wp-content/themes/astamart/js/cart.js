jQuery( document ).ready(function($) {
    if(Number(localStorage.getItem('totalPrice'))) {
        $('.js-total-sum').empty();
        $('.js-total-sum').text(localStorage.getItem('totalPrice'));
        $('.js-itogo').text(localStorage.getItem('totalPrice'));
    } else {
        $('.tm-constructor-wrap').css('visibility', 'hidden');
        $('.tm-sec2-header').text('Корзина пуста');
    } 

    var imgPath, orderNumber, imgDimen, imgMaterial, imgUnderframe, imgCovering, imgStylization, imgPrice;
    var materialAr = ['Не выбрано', 'Холст натуральный глянец', 'Холст натуральный матовый', 'Холст искусственный глянцевый', 'Холст искусственный матовый', 'Плёнка ПВХ глянцевая', 'Плёнка ПВХ матовая', 'Плёнка ПВХ сатиновая', 'Дескор - (ткань полиэстер)', 'Баннерная ткань DLS-Blackout'];
    var underframeAr = ['Не выбрано', 'Подрамник  толщина 20 мм', 'Подрамник  толщина 40 мм', 'Рамка алюминиевая 17 мм.', 'Рамка алюминиевая 22 мм.'];
    var coveringAr = ['Не выбрано', 'Структурный гель', 'Лак глянцевый', 'Лак матовый'];
    var stylizationAr = ['Не выбрано', 'Живопись', 'Фотоколлаж', 'Обработка, коррекция'];
    var orderM = JSON.parse(localStorage.getItem('orderM'));

    function renderOrders() {
        $('.js-cart-container').empty();
        if (orderM && orderM.length) {
            for(var i = 0, len = orderM.length; i < len; i++) {
                imgPath = orderM[i].img;
                orderNumber = i + 1;
                imgDimen = orderM[i].imgsize;
                imgMaterial = materialAr[orderM[i].material - 1];
                imgUnderframe = underframeAr[orderM[i].underframe - 1];
                imgCovering = coveringAr[orderM[i].covering - 1];
                imgStylization = stylizationAr[orderM[i].stylization - 1];
                imgPrice = orderM[i].sum;
                $('.js-cart-container').append('<div class="uk-grid " style="width: 100%"><div class="uk-width-small-1-2 uk-width-medium-2-10 uk-grid-collapse"><div class="uk-form-row"><div class="tm-see-pics uk-text-center"><label>Картинка</label><img class="js-bgpic" src="http://astamart.ru/uploader/uploads/' + imgPath + '" alt="work1"><img class="tm-ready" src="" alt=""></div></div></div><div class="uk-width-small-1-2 uk-width-medium-1-10 uk-grid-collapse"><div class="uk-form-row"><label>№ заказа</label>' + orderNumber + '</div></div><div class="uk-width-small-1-2 uk-width-medium-4-10 uk-grid-collapse"><div class="uk-form-row"><label>Параметры картины</label><div class="tm-constructor-form-price"><div class="options-razmer">Размер изображения: <span>'+imgDimen+'</span> см</div><div class="options-material">Материал: <span>'+imgMaterial+'</span></div><div class="options-podramnik">Виды подрамника: <span>'+imgUnderframe+'</span></div><div class="options-pokritie">Покрытие: <span>'+imgCovering+'</span></div><div class="options-stilizaciya">Стилизация: <span>'+imgStylization+'</span></div></div></div></div><div class="uk-width-small-1-2 uk-width-medium-2-10 uk-grid-collapse"><div class="uk-form-row"><label>Цена</label><div class="tm-constructor-form-price"><span class="js-total">'+imgPrice+'</span> руб.</div></div></div><div class="uk-width-small-1-2 uk-width-medium-1-10 uk-grid-collapse"><div class="uk-form-row"><label></label><div class="tm-constructor-form-price"><div class="remove-item js-order-remove" style="cursor:pointer" data-onumber="' + orderNumber + '">X</div></div></div></div>      </div>');
            }
        }
		    $('.js-order-remove').click(function(){
		        //console.log('REMOVe is w************');
                //console.log(orderM);
                var totalPrice = Number(localStorage.getItem('totalPrice'));
                var onumber = Number($(this).attr('data-onumber')) - 1;
                var subsum = orderM[onumber].sum;
                var newTotalPrice = totalPrice - subsum;
                $('.js-total-sum').empty();
                $('.js-total-sum').text(newTotalPrice);
                localStorage.removeItem('totalPrice');
                localStorage.setItem('totalPrice', newTotalPrice);
                $('.js-itogo').text(newTotalPrice);
		        orderM.splice(onumber, 1);
		        //console.log(orderM);
		        localStorage.removeItem('orderM');
		        if (orderM.length) {
		            localStorage.setItem('orderM', JSON.stringify(orderM));
		        } else {
                    $('.tm-constructor-wrap').css('visibility', 'hidden');
                    $('.tm-sec2-header').text('Корзина пуста');
                }
		        //console.log(orderM);
		        renderOrders();
		    });
    }
    renderOrders();
    //[{"sum":17814,"area":5700,"material":1,"covering":1,"stylization":1,"perim":714,"underframe":1,"mes":[{"width":100,"height":19},{"width":100,"height":19},{"width":100,"height":19}]}]
    // imgPath
    // orderNumber
    // imgDimen
    // imgMaterial
    // imgUnderframe
    // imgCovering
    // imgStylization
    // imgPrice
    //[{"sum":16736,"area":5376,"material":1,"covering":1,"stylization":1,"perim":608,"underframe":1,"mes":[{"width":48,"height":28},{"width":48,"height":28},{"width":48,"height":28},{"width":48,"height":28}],"img":"5a421f15dd595txtimg.png"}]
    $('.tm-book-order').click(function(e) {
        e.preventDefault();
        var bookingForm = {};
        bookingForm.name = $('.js-name').val();
        bookingForm.phone = $('.js-telefon').val();
        bookingForm.mail = $('.js-email').val();
        bookingForm.delivery = $('input[name=dostavka]:checked').val();
        bookingForm.payment = $('input[name=oplata]:checked').val();
        bookingForm.address = $('.delivery-address').val();
        bookingForm.info = $('.additional-info').val();
        bookingForm.order = localStorage.getItem('orderM');
        bookingForm.total = localStorage.getItem('totalPrice');
        var data = JSON.stringify(bookingForm);
        console.log($('.js-name').val());
        console.log($('.js-telefon').val());
        console.log($('.js-email').val());
        console.log($('input[name=dostavka]:checked').val());
        console.log($('input[name=oplata]:checked').val());
        console.log($('.delivery-address').val());
        console.log($('.additional-info').val());
        /* $.ajax({
            type: 'GET',
            url: 'https://some.url',
            data: data,
            success: function(data){
                $('.tm-constructor-wrap').css('visibility', 'hidden');
                $('.tm-sec2-header').text('Корзина пуста');
                localStorage.removeItem('orderM');
                localStorage.setItem('totalPrice', 0);
            }
        }); */
        $('.tm-constructor-wrap').css('visibility', 'hidden');
        $('.tm-sec2-header').text('Корзина пуста');
        localStorage.removeItem('orderM');
        localStorage.setItem('totalPrice', 0);
        $('.js-total-sum').text('0');
    });

});