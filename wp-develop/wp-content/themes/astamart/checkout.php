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
                        <div class="uk-grid tm-tpls-gal ">
                            <div class="uk-grid " style="width: 100%">
                                <div class="uk-overflow-container">
                                    <div class="tm-see-pics uk-text-center">
                                        <img class="js-bgpic" src="http://astamart-ru.loc/wp-content/themes/astamart/images/pics/pic1.jpg" alt="work1">
                                        <img class="tm-ready" src="" alt="">
                                        <!-- <div class="uk-width-large-1-4 uk-width-medium-1-3 uk-width-small-1-2 uk-margin-bottom">
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="uk-grid " style="width: 100%">
                                <div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
                                    <div class="uk-form-row">
                                        <label class="uk-form-label">Размер изображения (см)</label>
                                            <input class="js-dimen" type="text" value="100"/>
                                    </div>
                                    <div class="uk-form-row">
                                        <label class="uk-form-label">Материал</label>
                                        <select class="js-material">
                                            <!-- Material value -->
					                        <?php include('inc/front-page/constructor/material.php'); ?>
                                            <!-- End material value -->
                                        </select>
                                    </div>
                                    <div class="uk-form-row">
                                        <label class="uk-form-label">Покрытие</label>
                                        <select class="js-covering">
                                            <!-- Covering value -->
					                        <?php include('inc/front-page/constructor/covering.php'); ?>
                                            <!-- End covering value -->
                                        </select>
                                    </div>
                                    <div class="uk-form-row">
                                        <label class="uk-form-label">Количество</label>
                                        <div class="tm-constructor-form-price">
                                            <input class="js-order-count" type="text" value="1"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
                                    <div class="uk-form-row">
                                        <div class="uk-form-row">
                                            <label class="uk-form-label">Виды подрамника</label>
                                            <select class="js-underframe">
                                                <!-- Underframe value -->
						                        <?php include('inc/front-page/constructor/covering.php'); ?>
                                                <!-- End underframe value-->
                                            </select>
                                        </div>
                                        <div class="uk-form-row">
                                            <label class="uk-form-label">Стилизация</label>
                                            <div class="tm-style">
                                                <select class="js-stylization">
                                                    <!-- Stylization value -->
							                        <?php include('inc/front-page/constructor/stylization.php'); ?>
                                                    <!-- End stylization value-->
                                                </select>
                                            </div>
                                        </div>
                                        <div class="uk-form-row">
                                            <label class="uk-form-label">Стоимость:</label>
                                            <div class="tm-constructor-form-price">
                                                <span class="js-total">0</span> р
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="uk-grid " style="width: 100%">
                                <div class="uk-grid" style="margin-top: 20px; width: 100%">
                                    <div class="uk-width-small-1-1 uk-width-medium-1-1 tm-custom">
                                        <h2>Контакная информация</h2>
                                    </div>
                                    <div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
                                        <div class="uk-form-row">
                                            <label class="uk-form-label">ФИО:</label>
                                            <div class="tm-constructor-form-name">
                                                <input class="js-name" type="text"/>
                                            </div>
                                        </div>
                                        <div class="uk-form-row">
                                            <label class="uk-form-label">E-mail:</label>
                                            <div class="tm-constructor-form-name">
                                                <input class="js-telefon" type="text"/>
                                            </div>
                                        </div>
                                        <div class="uk-form-row">
                                            <label class="uk-form-label">Телефон:</label>
                                            <div class="tm-constructor-form-name">
                                                <input class="js-email" type="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
                                        <div class="uk-form-row">
                                            <label class="uk-form-label">Тип доставки:</label>
                                            <div class="tm-constructor-form-name">
                                                <input class="js-delivery" type="checkbox" name="" value="" /> Самовывоз <br />
                                                <input class="js-delivery" type="checkbox" name="" value="" /> Доставка курьером<br />
                                            </div>
                                        </div>
                                        <div class="uk-form-row">
                                            <label class="uk-form-label">Тип оплаты:</label>
                                            <div class="tm-constructor-form-name">
                                                <input class="js-pay-method" type="checkbox" name="" value="" /> Наличный расчет <br />
                                                <input class="js-pay-method" type="checkbox" name="" value="" /> Банковской картой<br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                            <div class="uk-grid" style="margin-top: 20px; width: 100%">
                                <div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom uk-text-right">
                                    <button class="tm-constructor-form-order-btn tm-book-order">Заказать
                                    </button>
                                </div>
                            </div>
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