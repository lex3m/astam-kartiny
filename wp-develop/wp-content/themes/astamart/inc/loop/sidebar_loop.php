<?php
global $post;
$number = 2;
$category = 4;

$get_featured_posts = new WP_Query(array(
	'cat' => $category,
	'posts_per_page' => $number,
	'paged' => get_query_var('paged'),
));
?>

<ul>
<?php while ($get_featured_posts->have_posts()):$get_featured_posts->the_post();
		?>
        <li>
            <a class=" head uk-text-middle" href="<?php the_permalink(); ?>"  title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
            <div class="tm-as3-text">
	            <?php the_excerpt(); ?>
                <div class="tm-as3-more uk-text-right"><a href="<?php the_permalink(); ?>"  title="<?php the_title_attribute(); ?>">Подробнее</a></div>
            </div>
        </li>
		<?php
	endwhile;
	// Reset Post Data
	wp_reset_query();
	?>
</ul>
