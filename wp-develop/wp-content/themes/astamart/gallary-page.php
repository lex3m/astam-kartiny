<?php
/*
Template Name: Галерея
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