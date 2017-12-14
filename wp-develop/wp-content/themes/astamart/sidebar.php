<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package astamart
 */
//
if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
//?>

<!-- aside start-->
<aside class="tm-global-wrap-left uk-width-large-1-3 uk-width-medium-1-3 uk-hidden-small">
    <!-- as1 end-->
    <!-- as1 start-->
    <div class="tm-as1-wrap">
        <div class="tm-as1-block">
	        <?php wp_nav_menu( array(
		        'menu' => 3,
		        'menu_class'=>'menu-sidebar',
		        'container'       => '',
		        'container_class' => '',
		        'container_id'    => '',
	        )); ?>
        </div>
    </div>
    <!-- as1 end-->
    <!-- as2 start-->
    <div class="tm-as2-wrap">
        <div class="tm-as2-block">
            <h3 class="tm-as2-header">Посмотрите это</h3>
            <div class="tm-as2-video">
                <?php dynamic_sidebar( 'video-sidebar' ); ?>
            </div>
            <div class="tm-as2-link uk-text-right"><a href="https://youtu.be">смотреть другие видео</a></div>
        </div>
    </div>
    <!-- as2 end-->
    <!-- as3 start-->
    <div class="tm-as3">
        <h3 class="tm-as3-header">Полезные статьи</h3>
        <div class="tm-as3-wrap">
            <div class="tm-as3-block">
                <?php include ('inc/loop/sidebar_loop.php');?>
                <div class="tm-as3-more-art uk-text-center"><a href="/articles/">больше статей</a></div>
            </div>
        </div>
    </div>
    <!-- as3 end-->
</aside>
<!-- aside end-->
