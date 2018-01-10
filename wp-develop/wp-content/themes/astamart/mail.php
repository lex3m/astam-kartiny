<?php
/*
Template Name: mail
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
				<?php include('inc/page/global-wrap-before-content-sections.php'); ?>
				<!-- sec2 start-->
				<section>
					<div class="tm-sec2-wrap">
                        <?php

                        $to= "Astamart <gonchar.a.v@mail.ru>" ;

                        $subject = "Оформление заказа";

                        $message = ''
//                        <html>
//                        <head>
//                        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
//                            <title>Оформление заказа</title>
//                        </head>
//                        <h1>Оформление заказа</h1>
//		                	<!--- start  list of orders -->
//                             <div class="uk-grid " style="width: 100%;flex: none; margin: 0;float: left;    display: -ms-flexbox;display: -webkit-flex;display: flex;-ms-flex-wrap: wrap;-webkit-flex-wrap: wrap;flex-wrap: wrap;padding: 0;list-style: none;">
//                                <div class="uk-width-small-1-2 uk-width-medium-2-10 uk-grid-collapse" style="width: 20%;padding-left: 35px;box-sizing: border-box;">
//                                    <div class="uk-form-row" style="display: block;padding-left: 0;">
//                                        <div class="tm-see-pics uk-text-center"  style="display: block;">
//                                            <label style="cursor: default;"><span style="font-weight: bold;">Картинка</span></label>
//                                            <img class="js-bgpic" src="http://mydevelop.xyz/uploader/uploads/5a3cfddb04733txtimg.png" alt="work1" style="border: 0;max-width: 100%;height: auto; box-sizing: border-box; vertical-align: middle;">
//                                            <img class="tm-ready" src="" alt="">
//                                        </div>
//                                    </div>
//                                </div>
//                                 <div style="clear: both;"></div>
//                                <div class="uk-width-small-1-2 uk-width-medium-1-10 uk-grid-collapse" style="display:block; width: 10%;margin-top: 0;margin-left: 0;padding-left: 35px;">
//                                        <div class="uk-form-row" style="display: block;padding-left: 0;">
//                                            <label style="cursor: default;"><span style="font-weight: bold;">№ заказа</span></label>
//                                            <br>
//                                             <span>1</span>
//                                        </div>
//                                </div>
//                                 <div style="clear: both;"></div>
//                                <div class="uk-width-small-1-2 uk-width-medium-4-10 uk-grid-collapse" style="display:block; width: 40%;margin-top: 0;margin-left: 0;padding-left: 35px;">
//                                        <div class="uk-form-row" style="display: block;padding-left: 0;">
//                                            <label style="cursor: default;"><span style="font-weight: bold;">Параметры картины</span></label>
//                                            <br>
//                                            <div class="tm-constructor-form-price"  style="display: block;">
//                                                <div class="options-razmer" style="display: block;">Размер изображения: <span>100</span> см</div>
//                                                <div class="options-material" style="display: block;">Материал: <span>Холст натуральный глянец</span></div>
//                                                <div class="options-podramnik" style="display: block;">Виды подрамника: <span>Структурный гель</span></div>
//                                                <div class="options-pokritie" style="display: block;">Покрытие: <span>Лак глянцевый</span></div>
//                                                <div class="options-stilizaciya" style="display: block;">Стилизация: <span>Живопись</span></div>
//                                            </div>
//                                        </div>
//                                </div>
//                                 <div style="clear: both;"></div>
//                                <div class="uk-width-small-1-2 uk-width-medium-2-10 uk-grid-collapse" style="display:block; width: 20%;margin-top: 0;margin-left: 0;padding-left: 35px;">
//                                        <div class="uk-form-row" style="cursor: default;">
//                                            <label style="cursor: default;"><span style="font-weight: bold;">Цена</span></label>
//                                            <div class="tm-constructor-form-price" style="display: block;">
//                                            <br>
//                                                <span class="js-total">15 000</span> руб.
//                                            </div>
//                                        </div>
//                                </div>
//                                 <div style="clear: both;"></div>
//                            </div>
//                        <br>
//                        <hr>
//                        <br>
//                        <div class="uk-grid " style="width: 100%;flex: none; margin: 0;float: left;    display: -ms-flexbox;display: -webkit-flex;display: flex;-ms-flex-wrap: wrap;-webkit-flex-wrap: wrap;flex-wrap: wrap;padding: 0;list-style: none;text-align: center;">
//                            <div class="uk-width-small-1-2 uk-width-medium-2-10 uk-grid-collapse" style="width: 20%;padding-left: 35px;box-sizing: border-box;">
//                                <div class="uk-form-row" style="display: block;padding-left: 0;">
//                                    <div class="tm-see-pics uk-text-center"  style="display: block;">
//                                        <label style="cursor: default;font-weight: bold;">Картинка</label>
//                                        <img class="js-bgpic" src="http://mydevelop.xyz/uploader/uploads/5a3cfddb04733txtimg.png" alt="work1" style="border: 0;max-width: 100%;height: auto; box-sizing: border-box; vertical-align: middle;">
//                                        <img class="tm-ready" src="" alt="">
//                                    </div>
//                                </div>
//                            </div>
//                            <div style="clear: both;"></div>
//                            <div class="uk-width-small-1-2 uk-width-medium-1-10 uk-grid-collapse" style="display:block; width: 10%;margin-top: 0;margin-left: 0;padding-left: 35px;">
//                                <div class="uk-form-row" style="display: block;padding-left: 0;">
//                                    <label style="cursor: default;font-weight: 400;">№ заказа</label>
//                                   2
//                                </div>
//                            </div>
//                            <div style="clear: both;"></div>
//                            <div class="uk-width-small-1-2 uk-width-medium-4-10 uk-grid-collapse" style="display:block; width: 40%;margin-top: 0;margin-left: 0;padding-left: 35px;">
//                                <div class="uk-form-row" style="display: block;padding-left: 0;">
//                                    <label style="cursor: default;font-weight: 400;">Параметры картины</label>
//                                    <div class="tm-constructor-form-price"  style="display: block;">
//                                        <div class="options-razmer" style="display: block;">Размер изображения: <span>100</span> см</div>
//                                        <div class="options-material" style="display: block;">Материал: <span>Холст натуральный глянец</span></div>
//                                        <div class="options-podramnik" style="display: block;">Виды подрамника: <span>Структурный гель</span></div>
//                                        <div class="options-pokritie" style="display: block;">Покрытие: <span>Лак глянцевый</span></div>
//                                        <div class="options-stilizaciya" style="display: block;">Стилизация: <span>Живопись</span></div>
//                                    </div>
//                                </div>
//                            </div>
//                            <div style="clear: both;"></div>
//                            <div class="uk-width-small-1-2 uk-width-medium-2-10 uk-grid-collapse" style="display:block; width: 20%;margin-top: 0;margin-left: 0;padding-left: 35px;">
//                                <div class="uk-form-row" style="cursor: default;font-weight: 400;">
//                                    <label style="cursor: default;font-weight: 400;">Цена</label>
//                                    <div class="tm-constructor-form-price" style="display: block;">
//                                        <span class="js-total">15 000</span> руб.
//                                    </div>
//                                </div>
//                            </div>
//                            <div style="clear: both;"></div>
//                        </div>
//
//			<!--- end list of orders -->
//                            <div class="uk-grid " style="width: 100%">
//                                <div class="uk-width-small-1-1 uk-width-medium-1-1 tm-custom uk-grid-collapse">
//                                        <div class="uk-form-row">
//						Итого: <span id="itogo"><strong class="js-itogo">0</strong> руб.</span>
//                                        </div>
//                                </div>
//                            </div>
//
//                        </body>
//                        </html>
//                        '';

                        /* Для отправки HTML-почты вы можете установить шапку Content-type. */
                        $headers= "MIME-Version: 1.0\r\n";
                        $headers .= "Content-type: text/html; charset=utf-8\r\n";

                        /* дополнительные шапки */
                        $headers .= "From: Astamart <astmarat@example.com>\r\n";


                        /* и теперь отправим из */
                        mail($to, $subject, $message, $headers);
						?>

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

<?php
get_footer();

