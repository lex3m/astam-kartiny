<div id="madein" class="tm-content-full">
	<h1 class="uk-text-center">Сделано в Аста М</h1>
	<div class="tm-madein-wrap">
		<div class="madein-list">
			<ul class="madein-list-ul">
				<?php dynamic_sidebar( 'made-in-astam-list' );?>
			</ul>
		</div>
		<div class="madein-block-wrap uk-grid">
			<div class="madein-block madein-block-pic uk-hidden-small uk-width-large-1-2 uk-width-medium-1-2">
				<img src="<?php echo get_template_directory_uri() . '/images/madein/girl.png'; ?>" alt="TbOTR">
			</div>
			<div class="madein-block madein-block-text uk-width-large-1-2 uk-width-medium-1-2 uk-width-small-1-1">
				<div class="madein-block-text-in">
					<?php dynamic_sidebar( 'made-in-astam-text' );?>
				</div>
			</div>
		</div>
	</div>
</div>