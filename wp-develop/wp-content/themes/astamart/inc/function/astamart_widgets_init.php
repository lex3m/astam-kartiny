<?php
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function astamart_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Logo img', 'astamart' ),
		'id'            => 'logo-img',
		'description'   => esc_html__( 'Добавить виджет.', 'astamart' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '',
		'after_title'   => '',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'astamart' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Добавить виджет.', 'astamart' ),
		'before_widget' => '<div id="%1$s" class="tm-as2-block %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="tm-as2-header">',
		'after_title'   => '</h3>',
	) );

/** Slider widget */

	register_sidebar( array(
		'name'          => esc_html__( 'Slider img(front-page)', 'astamart' ),
		'id'            => 'slider-img',
		'description'   => esc_html__( 'Добавить виджет.', 'astamart' ),
		'before_widget' => '<li>',
		'after_widget'  => '</li>',
		'before_title'  => '',
		'after_title'   => '',
	) );
	/** Slider widget end*/

	/** Pics widget*/
	register_sidebar( array(
		'name'          => esc_html__( 'Посмотреть в интерьере(front-page)', 'astamart' ),
		'id'            => 'pics-img',
		'description'   => esc_html__( 'Добавить виджет.', 'astamart' ),
		'before_widget' => '<div class="uk-width-large-1-3 uk-width-medium-1-3 uk-width-small-1-1 uk-margin-bottom uk-text-center">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );
	/** Pics widget*/

	register_sidebar( array(
		'name'          => esc_html__( 'Посмотрите это(front-page)', 'astamart' ),
		'id'            => 'video-front-page',
		'description'   => esc_html__( 'Добавить виджет.', 'astamart' ),
		'before_widget' => '<div id="%1$s" class="uk-width-large-1-3 uk-width-medium-1-3 uk-width-small-1-1 uk-margin-bottom uk-text-center">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Посмотрите это(sidebar)', 'astamart' ),
		'id'            => 'video-sidebar',
		'description'   => esc_html__( 'Добавить виджет.', 'astamart' ),
		'before_widget' => '<div class="tm-as2-v">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Сделано в Аста М - Список(front-page)', 'astamart' ),
		'id'            => 'made-in-astam-list',
		'description'   => esc_html__( 'Добавить виджет.', 'astamart' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '',
		'after_title'   => '',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Сделано в Аста М - Текс(front-page)', 'astamart' ),
		'id'            => 'made-in-astam-text',
		'description'   => esc_html__( 'Добавить виджет.', 'astamart' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '',
		'after_title'   => '',
	) );

}
add_action( 'widgets_init', 'astamart_widgets_init' );