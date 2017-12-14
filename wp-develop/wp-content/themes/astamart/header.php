<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package astamart
 */


?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri() . '/favicon.ico';?>">

	<?php wp_head(); ?>
</head>

<body>
<div class="page-wrapper"> <!-- Page wrapper Start -->

    <div class="tm-header-wrapp">
        <!-- Header Start -->
        <header>
            <div class="tm-header-topbox">
                <div class="uk-container uk-container-center">
                    <div class="uk-vertical-align">
                        <div class="uk-display-inline-block uk-vertical-align-middle tm-header-topbox-logo">
                            <a href="/"><?php dynamic_sidebar( 'logo-img' ); ?></a>
                        </div>
                        <div class="uk-display-inline-block uk-vertical-align-middle tm-header-topbox-name">
                            <span class="tm-header-topbox-name1"><span>М</span>агазин</span><br>
                            <span class="tm-header-topbox-name2"><span>м</span>одульных <span>к</span>артин</span>
                        </div>
                        <!-- Callback Start -->
	                    <?php include('inc/header/callback.php'); ?>
                        <!-- Callback End -->
                        <!-- Shopping basket Start -->
	                    <?php include('inc/header/shopping_basket.php'); ?>
                        <!-- Shopping basket End -->
                    </div>

                </div>
            </div>
            <div class="tm-header-menu" data-uk-sticky>
                <div class="uk-container uk-container-center tm-header-nav">
                    <nav class="uk-navbar uk-navbar-attached uk-navbar-flip">
                        <div class="">
	                        <?php wp_nav_menu( array(
                                'menu' => 2,
		                        'menu_class'=>'uk-navbar-nav uk-hidden-small',
		                        'container'       => '',
		                        'container_class' => '',
		                        'container_id'    => '',
	                        )); ?>
                            <a href="#topnavbar-mobile" class="uk-navbar-toggle uk-visible-small"  data-uk-offcanvas="{mode:'slide'}"></a>
                        </div>
                    </nav>
                    <div id="topnavbar-mobile" class="uk-offcanvas">
                        <a href="" class="uk-close"></a>
	                    <?php wp_nav_menu( array(
		                    'menu' => 2,
		                    'menu_class'=>'uk-navbar-nav topnavbar-mobile',
		                    'container'       => '',
		                    'container_class' => '',
		                    'container_id'    => '',
	                    )); ?>
                    </div>
                </div>

            </div>

        </header>
        <!-- Header End -->
    </div>
    <!-- <div class="tm-cont-wrap"> -->

    <div class="tm-cont-wrap"><!-- .tm-content-wrap Start -->
