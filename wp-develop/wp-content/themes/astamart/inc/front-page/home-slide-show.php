
<div class="tm-home-slideshow uk-slidenav-position">
	<img src="<?php echo get_template_directory_uri() . '/images/astam-img/bg-top-slider2.png'; ?>" alt="" class="tm-home-slideshow-bg">
	<div class="tm-home-slideshow-wrap uk-slidenav-position" data-uk-slideshow="{autoplay:true, autoplayInterval:4000}">
		<div class="tm-home-slideshow-box">
			<ul class="uk-slideshow">
				<?php dynamic_sidebar( 'slider-img' );?>
			</ul>

		</div>
		<ul class="uk-dotnav uk-flex-column uk-flex-center uk-flex-middle tm-home-slideshow-nav uk-position-z-index">
			<li data-uk-slideshow-item="0"><a href=""></a></li>
			<li data-uk-slideshow-item="1"><a href=""></a></li>
			<li data-uk-slideshow-item="2"><a href=""></a></li>
			<li data-uk-slideshow-item="3"><a href=""></a></li>
			<li data-uk-slideshow-item="4"><a href=""></a></li>
			<li data-uk-slideshow-item="5"><a href=""></a></li>
			<li data-uk-slideshow-item="6"><a href=""></a></li>
		</ul>
	</div>
	<div class="uk-animation-hover tm-home-slideshow-button">
<!--		<a href="#constructor" class="uk-animation-scale-down" data-uk-smooth-scroll>скомпоновать свой набор</a>-->
	</div>
</div>
