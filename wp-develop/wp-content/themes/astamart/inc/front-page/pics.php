<div id="pics" class="tm-content-full">
	<h1 class="uk-text-center">Посмотреть в интерьере</h1>
	<div class="tm-pics-wrap">
		<div class="uk-grid">
			<?php dynamic_sidebar('pics-img');?>
		</div>
	</div>
</div>
<div id="see-in" class="uk-modal tm-modal">
    <div class="uk-modal-dialog uk-modal-dialog-large">
        <!--  <h4>Выберите картинку</h4> -->
        <div class="uk-overflow-container">
            <div class="tm-see-pics uk-text-center">
                <img class="js-bgpic" src="<?php echo get_template_directory_uri() .'/images/pics/pic1.jpg'; ?>" alt="work1">
                <img class="tm-ready" src="" alt="">
                <!-- <div class="uk-width-large-1-4 uk-width-medium-1-3 uk-width-small-1-2 uk-margin-bottom">
				</div> -->
            </div>
        </div>
        <a class="uk-modal-close uk-close"></a>
    </div>
</div>