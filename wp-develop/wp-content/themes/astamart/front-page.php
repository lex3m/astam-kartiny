<?php
/**
 * Template to show the front page.
 *
 * @package astamart
 * @subpackage Astamart
 * @since Astamart 1.0
 */
?>

<?php get_header(); ?>
<!-- Home Slideshow Start -->
    <?php include('inc/front-page/home-slide-show.php'); ?>
<!-- Home Slideshow End -->

<!-- Constructor Start -->
    <?php include('inc/front-page/constructor/constructor.php'); ?>
<!-- Constructor End -->

    <div class="tm-content-wrap"><!-- Pics Start -->
	    <?php include('inc/front-page/pics.php'); ?>
    </div><!-- Pics End -->

    <!-- How to use constructor Start -->
        <?php include('inc/front-page/how-to-use.php'); ?>
    <!-- How to use constructor End -->

    <div class="tm-content-wrap"><!-- Working Start -->
	    <?php include('inc/front-page/working.php'); ?>
    </div><!-- Working End -->

    <div class="tm-content-wrap"><!-- Madein Start -->
	    <?php include('inc/front-page/madein.php'); ?>
    </div><!-- Madein End -->

    <div class="tm-content-wrap"><!-- Vidblk Start -->
	    <?php include('inc/front-page/vidblk.php'); ?>
    </div><!-- Vidblk End -->

    <div class="tm-content-wrap"><!-- Templates Start -->
	    <?php include('inc/front-page/tpls.php'); ?>
    </div><!-- Templates End -->

    <div class="tm-content-wrap"><!-- GetInTouch Start -->
    <div id="git" class="tm-content-full">
    <h1 class="uk-text-center">Связаться с нами</h1>
    <div class="tm-git-wrap">
        <div class="tm-git-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eaque eveniet ipsam tempore
            aliquid doloribus dolores ut nulla nobis optio adipisci, debitis eligendi odio animi cum culpa
            quaerat nihil itaque est tenetur repellendus. Sapiente quia, numquam eius reiciendis ratione
            blanditiis dignissimos totam alias iste accusamus dolorum corporis itaque ea optio ex. Fugit in
            quisquam, ipsam, tempora consequuntur fuga atque vitae!
        </div>
	    <?php include('inc/front-page/contact-form.php'); ?>
    </div>
    </div>
    </div><!-- GetInTouch End -->

    <div class="tm-content-wrap"><!-- Contacts Start -->
	    <?php include('inc/front-page/contacts.php'); ?>
    </div><!-- Contacts End -->

    <div class="tm-content-wrap"><!-- Map Start -->
	    <?php include('inc/front-page/maps.php'); ?>
    </div><!-- Map End -->

<?php get_footer(); ?>