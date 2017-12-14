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
                <ul>
                    <li>
                        <a class=" head uk-text-middle" href="#">Название какой-то статьи</a>
                        <div class="tm-as3-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eveniet quaerat nemo ex officia deleniti in reiciendis, dignissimos blanditiis architecto, inventore impedit. Voluptates!
                            <div class="tm-as3-more uk-text-right"><a href="#">Подробнее</a></div>
                        </div>
                    </li>
                    <li>
                        <a class=" head uk-text-middle" href="#">Название какой-то ещё статьи</a>
                        <div class="tm-as3-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eveniet quaerat nemo ex officia deleniti in reiciendis, dignissimos blanditiis architecto, inventore impedit. Voluptates!
                            <div class="tm-as3-more uk-text-right"><a href="#">Подробнее</a></div>
                        </div>
                    </li>
                </ul>
                <div class="tm-as3-more-art uk-text-center"><a href="#">больше статей</a></div>
            </div>
        </div>
    </div>
    <!-- as3 end-->
</aside>
<!-- aside end-->
