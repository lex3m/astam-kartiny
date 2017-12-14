<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package astamart
 */

get_header(); ?>
        <section class="error-404">
				<header class="page-header">
					<h1 class="page-title">Страница 404</h1>
				</header><!-- .page-header -->
				<div class="page-content tm-sec1-wrap">
                    <img class="tm-sec1-img" src="<?php echo get_template_directory_uri() . '/images/page-404.png'; ?>" alt="error 404">
					<p><?php echo 'Извините, необходимая страница не была найдена на сервере. Она могла быть удалена, или вы ввели неверный адрес.'; ?></p>
				</div><!-- .page-content -->
			</section><!-- .error-404 -->
<?php
get_footer();
