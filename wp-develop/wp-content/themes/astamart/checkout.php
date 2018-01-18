<?php
/*
Template Name: Оформить заказ
*/
?>
<?php
/**
 * The template for displaying all single posts
 * @package astamart
 */

get_header(); ?>
    <div class="tm-cont-wrap">
        <div class="tm-global-wrap uk-grid">
			<?php
			get_sidebar();
			?>
            <div class="tm-global-wrap-right uk-width-large-2-3 uk-width-medium-2-3 uk-width-small-1-1">
                <!-- sec2 start-->
                <section>
                    <div class="tm-sec2-wrap">
						<?php
						while ( have_posts() ) : the_post();
							get_template_part( 'template-parts/content', get_post_type() );
						endwhile; // End of the loop.
						?>
                    </div>


                    <div class="tm-sec3-wrap tm-constructor-wrap">
			<form id="cart">
                        <div class="uk-grid tm-tpls-gal ">
                            <div class="uk-grid js-cart-container" style="width: 100%"></div>

                            <div class="uk-grid " style="width: 100%">
                                <div class="uk-width-small-1-1 uk-width-medium-1-1 tm-custom uk-grid-collapse">
                                        <div class="uk-form-row tm-total-sum">
						Итого: <span id="itogo"><strong class="js-itogo">0</strong> руб.</span>
                                        </div>
                                </div>
                            </div>
                            <div class="uk-grid " style="width: 100%">
                                <div class="uk-grid" style="margin: 0 auto; max-width: 600px;">
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">
	                                        <div class="uk-form-row">
	                                            <label>Ваше имя *</label>
	                                        </div>
                                        </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">
	                                        <div class="uk-form-row">
	                                            <div class="tm-constructor-form-name tm-git-form-input">
	                                                <input class="js-name" name="name" type="text" placeholder="Ваше имя" />
	                                            </div>
	                                        </div>
                                        </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">
	                                        <div class="uk-form-row">
	                                            <label>Телефон *</label>
	                                        </div>
                                        </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">	
	                                        <div class="uk-form-row">
	                                            <div class="tm-constructor-form-name tm-git-form-input">
	                                                <input class="js-telefon tel" name="phone" type="tel" placeholder="+7 (555) 555-55-55" />
	                                            </div>
	                                        </div>
	                                </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">
	                                        <div class="uk-form-row">
                                            <label>E-mail</label>
	                                        </div>
                                        </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">	
	                                        <div class="uk-form-row">
	                                            <div class="tm-constructor-form-name tm-git-form-input">
	                                                <input class="js-email" name="email" type="email" placeholder="mail@gmail.com" />
	                                            </div>
	                                        </div>
	                                </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">
	                                        <div class="uk-form-row">
                                            <label>Способ доставки</label>
	                                        </div>
                                        </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">	
	                                        <div class="uk-form-row">
	                                            <div class="tm-constructor-form-name">							 
	                                                 <input type="radio" id="dostavka1" name="dostavka" value="Самовывоз (бесплатно)">
							 <label>Самовывоз (бесплатно)</label>
	                                            </div>
	                                            <div class="tm-constructor-form-name">
	                                                 <input type="radio" id="dostavka2" name="dostavka" value="Курьером в пределах КАД">
							 <label>Курьером в пределах КАД</label>
	                                            </div>
	                                            <div class="tm-constructor-form-name">
	                                                 <input type="radio" id="dostavka3" name="dostavka" value="Доставка почтой России">
							 <label>Доставка почтой России</label>
	                                            </div>
	                                        </div>
	                                </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">
	                                        <div class="uk-form-row">
                                            <label>Способ оплаты</label>
	                                        </div>
                                        </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">	
	                                        <div class="uk-form-row">
	                                            <div class="tm-constructor-form-name">							 
	                                                 <input type="radio" id="oplata1" name="oplata" value="Наличными">
							 <label>Наличными</label>
	                                            </div>
	                                            <div class="tm-constructor-form-name">
	                                                 <input type="radio" id="oplata2" name="oplata" value="Банковской картой">
							 <label>Банковской картой</label>
	                                            </div>
	                                        </div>
	                                </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">
	                                        <div class="uk-form-row">
                                            <label>Адрес доставки</label>
	                                        </div>
                                        </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">	
	                                        <div class="uk-form-row">
							<textarea name="adress" class="delivery-address" placeholder="Адрес доставки"></textarea>
	                                        </div>
	                                </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">
	                                        <div class="uk-form-row">
                                            <label>Сообщение</label>
	                                        </div>
                                        </div>
                                       <div class="uk-width-small-1-2 uk-width-medium-5-10 tm-custom uk-grid-collapse">	
	                                        <div class="uk-form-row">
							<textarea name="message" class="additional-info" placeholder="Дополнительная информация"></textarea>
	                                        </div>
	                                </div>
                                    </div>
                                </div>
                        </div>
                            <div class="uk-text-center" style="margin-top: 20px; width: 100%">
                                <!-- <div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom"> -->
                                    <button class="tm-constructor-form-order-btn tm-book-order">Заказать</button>
                                <!-- </div> -->
                            </div>
			</form>
                    </div>
                </section>
                <!-- sec2 end-->
				<?php include('inc/page/global-wrap-after-content-sections.php');?>
            </div>
        </div> <!-- Grid end -->
        <section class="tm-calculation-wrap"><!-- Calculation Start -->
            <div id="git" class="tm-content-full">
                <h1 class="uk-text-center">Заказать расчет стоимости</h1>
                <div class="tm-git-wrap">
                    <div class="tm-git-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eaque eveniet ipsam tempore aliquid doloribus dolores ut nulla nobis optio adipisci, debitis eligendi odio animi cum culpa quaerat nihil itaque est tenetur repellendus. Sapiente quia, numquam eius reiciendis ratione blanditiis dignissimos totam alias iste accusamus dolorum corporis itaque ea optio ex. Fugit in quisquam, ipsam, tempora consequuntur fuga atque vitae!
                    </div>
				    <?php include('inc/front-page/contact-form.php'); ?>
                </div>
            </div>
        </section><!-- Calculation End -->
        <section class="tm-contacts-wrap"><!-- Contacts Start -->
		    <?php include('inc/front-page/contacts.php'); ?>
        </section><!-- Contacts End -->
        <div class="tm-map-wrap"><!-- Map Start -->
		    <?php include('inc/front-page/maps.php'); ?>
        </div><!-- Map End -->
    </div>
    <div id="order-sent" class="uk-modal tm-modal">
        <div class="uk-modal-dialog uk-modal-dialog-large">
            <h4 class="uk-text-center" style="font-size: 30px; margin-top: 25px;">Ваш заказ отправлен на обработку <br><br> Спасибо!</h4> 
            <a class="uk-modal-close uk-close"></a>
        </div>
    </div>
<script type='text/javascript' src='/wp-content/themes/astamart/js/cart.js'></script>

<?php

get_footer();