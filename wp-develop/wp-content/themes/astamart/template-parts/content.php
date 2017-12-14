<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package astamart
 */

?>

<!-- tm-sec2-wrap start-post_id-<?php the_ID(); ?> -->
<div class="tm-sec2-wrap">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="tm-sec2-header">', '</h1>' );
		else :
			the_title( '<h2 class="tm-sec2-header"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;
		if ( 'post' === get_post_type() ) : ?>

		<?php
		endif; ?>

    <!-- .tm-sec2-text start -->
	<div class="tm-sec2-text">
		<?php
			the_content();

		?>
	</div><!-- .tm-sec2-text end -->
<!-- tm-sec2-wrap end- post_id-<?php the_ID(); ?> -->
