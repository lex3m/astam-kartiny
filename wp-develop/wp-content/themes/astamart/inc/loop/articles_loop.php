<?php
global $post;
$number = 10;
$category = 5;

$get_featured_posts = new WP_Query(array(
	'cat' => $category,
	'posts_per_page' => $number,
	'paged' => get_query_var('paged'),
));
?>
<div class="tm-arcticle-wrap">

<?php while ($get_featured_posts->have_posts()):$get_featured_posts->the_post();
		?>
    <div class="tm-as5-block">
        <a class=" arcticle-head uk-text-middle" href="<?php the_permalink(); ?>"  title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
        <div class="article-text">
	    <?php the_excerpt(); ?>
        <div class="tm-as5-more uk-text-right"><a href="<?php the_permalink(); ?>"  title="<?php the_title_attribute(); ?>">Подробнее</a></div>
        </div>
    </div>
		<?php
	endwhile;
	// Reset Post Data
	wp_reset_query();
	?>
	    <?php wp_pagenavi(array('query' => $get_featured_posts)); ?>
</div>