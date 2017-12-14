<?php
/**
 * astamart functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package astamart
 */

if ( ! function_exists( 'astamart_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function astamart_setup()
	{
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on astamart, use a find and replace
		 * to change 'astamart' to the name of your theme in all the template files.
		 */
		load_theme_textdomain('astamart', get_template_directory() . '/languages');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support('post-thumbnails');

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(array(
			'menu-1' => esc_html__('Primary', 'astamart'),
		));

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support('html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		));

		// Set up the WordPress core custom background feature.
		add_theme_support('custom-background', apply_filters('astamart_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		)));

		// Add theme support for selective refresh for widgets.
		add_theme_support('customize-selective-refresh-widgets');
	}
endif;
add_action( 'after_setup_theme', 'astamart_setup' );


include ('inc/function/astamart_widgets_init.php');

/**
 * Enqueue scripts and styles.
 */
function astamart_scripts() {
	/** Head scripts */
	wp_enqueue_script( 'ajax-googleapis', 'http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), 'null', false );

	wp_enqueue_script( 'uikit-min', get_template_directory_uri() . '/js/uikit.min.js', array(), 'null', false );

	wp_enqueue_script( 'core-min', get_template_directory_uri() . '/js/core/core.min.js', array(), 'null', false );
	wp_enqueue_script( 'core-grid-min', get_template_directory_uri() . '/js/core/grid.min.js', array(), 'null', false );
	wp_enqueue_script( 'core-utility', get_template_directory_uri() . '/js/core/utility.min.js', array(), 'null', false );
	wp_enqueue_script( 'core-tab-min', get_template_directory_uri() . '/js/core/tab.min.js', array(), 'null', false );
	wp_enqueue_script( 'core-switcher-min', get_template_directory_uri() . '/js/core/switcher.min.js', array(), 'null', false );
	wp_enqueue_script( 'core-toggle-min', get_template_directory_uri() . '/js/core/toggle.min.js', array(), 'null', false );
	wp_enqueue_script( 'core-nav-min', get_template_directory_uri() . '/js/core/nav.min.js', array(), 'null', false );
//	wp_enqueue_script( 'core-switcher-min', get_template_directory_uri() . '/js/core/switcher.min.js', array(), 'null', false );

	wp_enqueue_script( 'components-grid-min', get_template_directory_uri() . '/js/components/grid.min.js', array(), 'null', false );
	wp_enqueue_script( 'components-grid-parallax-min', get_template_directory_uri() . '/js/components/grid-parallax.min.js', array(), 'null', false );
	wp_enqueue_script( 'components-slider-min', get_template_directory_uri() . '/js/components/slider.min.js', array(), 'null', false );
	wp_enqueue_script( 'components-slideset-min', get_template_directory_uri() . '/js/components/slideset.min.js', array(), 'null', false );
	wp_enqueue_script( 'components-slideshow-min', get_template_directory_uri() . '/js/components/slideshow.min.js', array(), 'null', false );
	wp_enqueue_script( 'components-slideshow-fx-min', get_template_directory_uri() . '/js/components/slideshow-fx.min.js', array(), 'null', false );
	wp_enqueue_script( 'components-sortable-min', get_template_directory_uri() . '/js/components/sortable.min.js', array(), 'null', false );
	wp_enqueue_script( 'components-parallax-min', get_template_directory_uri() . '/js/components/parallax.min.js', array(), 'null', false );
	wp_enqueue_script( 'components-sticky.min', get_template_directory_uri() . '/js/components/sticky.min.js', array(), 'null', false );

	wp_enqueue_script( 'konva-js', 'https://cdn.rawgit.com/konvajs/konva/1.7.3/konva.min.js', array(), 'null', true );

	wp_enqueue_style( 'style',get_template_directory_uri() . '/style.css', array(), 'null', false );
	wp_enqueue_style( 'range-slider', get_template_directory_uri() . '/range-slider.css', array(), 'null', false );
	wp_enqueue_style( 'pygment-trac', get_template_directory_uri() . '/pygment_trac.css', array(), 'null', false );

	wp_enqueue_style( 'astam-paintings-style', get_template_directory_uri() . '/astam-paintings-style.css', array(), 'null', false );
	wp_enqueue_style( 'astam-paintings-media-style', get_template_directory_uri() . '/astam-paintings-media-style.css', array(), 'null', false );
	wp_add_inline_script('astam-paintings-media-style', 'alert("Привет!");');

	echo "
	<style>
        output {
            display: block;
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            margin: 30px 0;
            width: 100%;
        }
    </style>\n";



	wp_enqueue_script( 'range-slider', get_template_directory_uri() . '/range-slider.js', array(), 'null', true );
	wp_enqueue_script( 'canvas', get_template_directory_uri() . '/js/canvas.js', array(), 'null', true );
	wp_enqueue_script( 'core-jquery-base64', get_template_directory_uri() . '/js/core/jquery.base64.js', array(), 'null', true );
	wp_enqueue_script( 'core-range-slider-custom', get_template_directory_uri() . '/js/core/range-slider-custom.js', array(), 'null', true );
	wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js', array(), 'null', true );

	wp_enqueue_style( 'formstyler-plugin-jquery-formstyler', get_template_directory_uri() . '/js/formstyler-plugin/jquery.formstyler.css', array(), 'null', true );
	wp_enqueue_style( 'formstyler-plugin-jquery-formstyler-theme-css', get_template_directory_uri() . '/js/formstyler-plugin/jquery.formstyler.theme.css', array(), 'null', true );
	wp_enqueue_script( 'formstyler-plugin-jquery-formstyler-min', get_template_directory_uri() . '/js/formstyler-plugin/jquery.formstyler.min.js', array(), 'null', true );

	wp_enqueue_script( 'jquery-maskedinput-min-js', get_template_directory_uri() . '/js/jquery.maskedinput.min.js', array(), 'null', true );

	wp_enqueue_script( 'pagination-min', get_template_directory_uri() . '/js/pagination.min.js', array(), 'null', true );

}
add_action( 'wp_enqueue_scripts', 'astamart_scripts' );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

add_action('wp_footer', 'tm_working_item');
function tm_working_item(){
	?>
    <script>
        $(function () {
            $('.tm-working-item').click(function(){
                var arr = document.getElementsByClassName('tm-working-overlay');
                $( arr ).each(function() {
                    if(!$(this).hasClass('uk-hidden')) {
                        $(this).addClass('uk-hidden');
                    }
                });
                $(this).find( '.tm-working-overlay' ).toggleClass('uk-hidden');
            });
        });
    </script>
	<?php
}


add_action('wp_footer', 'wpmidia_activate_masked_input');
function wpmidia_activate_masked_input(){
	?>
    <script>
        jQuery( function($){
            $(".tel").mask("+7 (999) 999-9999");
        });
	</script>
	<?php
}




