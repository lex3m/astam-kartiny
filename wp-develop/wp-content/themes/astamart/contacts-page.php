<?php
/*
Template Name: Контакты
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
                <section><!-- Contacts Start -->
		            <?php include('inc/front-page/contacts.php'); ?>
                </section><!-- Contacts End -->
                <section class="tm-contacts-wrap">
                <div class="tm-map-wrap"><!-- Map Start -->
		            <?php include('inc/front-page/maps.php'); ?>
                </div><!-- Map End -->
                <!-- sec2 end-->
            </div>
        </div> <!-- Grid end -->
    </div>

<?php

get_footer();