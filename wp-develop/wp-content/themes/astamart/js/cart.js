jQuery( document ).ready(function($) {

    var modal5 = UIkit.modal("#order-sent");

    if(Number(localStorage.getItem('totalPrice'))) {
        $('.js-total-sum').empty();
        $('.js-total-sum').text(localStorage.getItem('totalPrice'));
        $('.js-itogo').text(localStorage.getItem('totalPrice'));
    } else {
        $('.tm-constructor-wrap').css('display', 'none');
        $('.tm-sec2-header').text('Корзина пуста');
    } 

    var imgPath, orderNumber, imgDimen, imgMaterial, imgUnderframe, imgCovering, imgStylization, imgPrice;
    var materialAr = ['Не выбрано', 'Холст натуральный глянец', 'Холст натуральный матовый', 'Холст искусственный глянцевый', 'Холст искусственный матовый', 'Плёнка ПВХ глянцевая', 'Плёнка ПВХ матовая', 'Плёнка ПВХ сатиновая', 'Дескор - (ткань полиэстер)', 'Баннерная ткань DLS-Blackout'];
    var underframeAr = ['Не выбрано', 'Подрамник  толщина 18 мм', 'Подрамник  толщина 35 мм', 'Рамка алюминиевая 17 мм.', 'Рамка алюминиевая 22 мм.'];
    var coveringAr = ['Без покрытия', 'Структурный гель', 'Лак глянцевый', 'Лак матовый'];
    var stylizationAr = ['Без оформления', 'Живопись', 'Фотоколлаж', 'Обработка, коррекция'];
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
                $('.js-cart-container').append('<div class="uk-grid " style="width: 100%"><div class="uk-width-small-1-2 uk-width-medium-2-10 uk-grid-collapse"><div class="uk-form-row"><div class="tm-see-pics uk-text-center"><!--<label>Картинка</label>--><img class="js-bgpic" src="http://astamart.ru/uploader/uploads/' + imgPath + '" alt="work1"><img class="tm-ready" src="" alt=""></div></div></div><!--<div class="uk-width-small-1-2 uk-width-medium-1-10 uk-grid-collapse"><div class="uk-form-row"><label>№ заказа</label>' + orderNumber + '</div></div>--><div class="uk-width-small-1-2 uk-width-medium-4-10 uk-grid-collapse"><div class="uk-form-row"><label class="tm-order-thead">Параметры картины</label><div class="tm-constructor-form-price"><div class="options-razmer">Размер изображения: <span><strong>'+imgDimen+'</strong></span> см</div><div class="options-material">Материал: <span><strong>'+imgMaterial+'</strong></span></div><div class="options-podramnik">Виды подрамника: <span><strong>'+imgUnderframe+'</strong></span></div><div class="options-pokritie">Покрытие: <span><strong>'+imgCovering+'</strong></span></div><div class="options-stilizaciya">Стилизация: <span><strong>'+imgStylization+'</strong></span></div></div></div></div><div class="uk-width-small-1-2 uk-width-medium-2-10 uk-grid-collapse"><div class="uk-form-row"><label class="tm-order-thead">Цена</label><div class="tm-constructor-form-price"><span class="js-total"><strong>'+imgPrice+'</strong></span> руб.</div></div></div><div class="uk-width-small-1-2 uk-width-medium-1-10 uk-grid-collapse"><div class="uk-form-row"><label></label><div class="tm-constructor-form-price"><div class="remove-item js-order-remove uk-text-center" style="cursor:pointer" data-onumber="' + orderNumber + '"><button class="uk-button-danger">Удалить</button></div></div></div></div>      </div>');
            }
        }
		    $('.js-order-remove').click(function(){

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
		        localStorage.removeItem('orderM');
		        if (orderM.length) {
		            localStorage.setItem('orderM', JSON.stringify(orderM));
		        } else {
                    $('.tm-constructor-wrap').css('display', 'none');
                    $('.tm-sec2-header').text('Корзина пуста');
                }

		        renderOrders();
		    });
    }
    renderOrders();
   
    $('.tm-book-order').click(function(e) {
        var bookingForm = {};
        var orderLS = JSON.parse(localStorage.getItem('orderM'));
        bookingForm.order = orderLS;
        if (orderLS && orderLS.length) {
            for(var i = 0, len = orderLS.length; i < len; i++) {
                bookingForm.order[i].material = materialAr[orderLS[i].material - 1];
                bookingForm.order[i].underframe = underframeAr[orderLS[i].underframe - 1];
                bookingForm.order[i].covering = coveringAr[orderLS[i].covering - 1];
                bookingForm.order[i].stylization = stylizationAr[orderLS[i].stylization - 1];
            }
        }


        e.preventDefault();
        bookingForm.name = $('.js-name').val();
        bookingForm.phone = $('.js-telefon').val();
        bookingForm.mail = $('.js-email').val();
        bookingForm.delivery = $('input[name=dostavka]:checked').val();
        bookingForm.payment = $('input[name=oplata]:checked').val();
        bookingForm.address = $('.delivery-address').val();
        bookingForm.info = $('.additional-info').val();
        //bookingForm.order = JSON.parse(localStorage.getItem('orderM'));
        bookingForm.total = localStorage.getItem('totalPrice');

        var data  = bookingForm;

        if(bookingForm.name && bookingForm.phone && bookingForm.mail) {
             $.ajax({
                type: 'POST',
                url: '/uploader/send.php',
		        data: data,
                success: function(data){
                    $('.tm-constructor-wrap').css('visibility', 'hidden');
                    $('.tm-sec2-header').text('Корзина пуста');
                    localStorage.removeItem('orderM');
                    localStorage.setItem('totalPrice', 0);
                }
            });
             $('.tm-constructor-wrap').css('display', 'none');
            $('.tm-sec2-header').text('Корзина пуста');
            localStorage.removeItem('orderM');
            localStorage.setItem('totalPrice', 0);
            $('.js-total-sum').text('0');
            //modal5modal5.show();
            UIkit.notify("<i class='uk-icon-check'></i> Заказ отправлен в обработку", {
                status  : 'success',
                timeout : 5000,
                pos     : 'top-center'
            });
        } else {
            if(!$('.js-name').val()){
                $('.js-name').addClass('uk-form-danger');
            }
            if(!$('.js-telefon').val()){
                $('.js-telefon').addClass('uk-form-danger');
            }
            if(!$('.js-email').val()){
                $('.js-email').addClass('uk-form-danger');
            }
            UIkit.notify("<i class='uk-icon-close'></i> Заполните обязательные поля!", {
                status  : 'danger',
                timeout : 5000,
                pos     : 'top-center'
            });
        }
    });

    $('.js-name').on('change', function () {
        var curEl = $(this);
        if(curEl.val()) {
            // curEl.css('border-color', '#89959d'); 
            curEl.removeClass('uk-form-danger'); 
        }
    });
    $('.js-telefon').on('change', function () {
        var curEl = $(this);
        if(curEl.val()) {
            // curEl.css('border-color', '#89959d');
            curEl.removeClass('uk-form-danger');
        }
    });
    $('.js-email').on('change', function () {
        var curEl = $(this);
        if(curEl.val()) {
            // curEl.css('border-color', '#89959d');
            curEl.removeClass('uk-form-danger');
        }
    });

});