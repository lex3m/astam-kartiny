<div id="constructor" class="tm-content-full">
	<h1 class="uk-text-center">Мощный конструктор картин</h1>
	<!-- <div >
		<ul class="js-temp">

		</ul>
	</div> -->
	<div class="tm-constructor-wrap uk-margin-bottom">
		<div class="tm-constructor-top-wrap">
			<label class="uk-form-label">Выбор изображения</label>
			<div class="uk-grid">
				<div class="uk-width-medium-1-2">
					<a href="#my-id" class="uk-text-center tm-api" data-uk-modal>Подобрать из каталога</a>
					<button class="tm-button-dis uk-text-center" disabled>Подобрать из каталога</button>
				</div>
				<div class="uk-width-medium-1-2">
					<a href="" class="js-file uk-text-center">Загрузить</a>
					<button class="tm-button-dis uk-text-center" disabled>Загрузить</button>
				</div>
			</div>
		</div>
		<div class="tm-constructor-inwrap">
			<div class="tm-constructor-right uk-text-center uk-flex uk-flex-top uk-flex-space-around">
				<!-- <button class="undraw">Del</button>  -->
				<div class="canvas">
					<div class="canvas-wrap">
						<div class="tm-rul-wrap js-ruler-gor uk-grid uk-grid-collapse">
							<!-- Canvas width value -->
							<?php include('canvas-width-value.php'); ?>
							<!-- End Canvas width value -->
						</div>
						<div class="tm-canv-wrap uk-grid uk-grid-collapse">
							<div class="tm-rulv-wrap js-ruler-ver">
								<!-- Canvas height value -->
								<?php include('canvas-height-value.php'); ?>
								<!-- End Canvas height value -->
							</div>
							<div id="canvas" style="border: 1px solid grey"></div>
						</div>
						<div class="tm-canv-bottom">
							<div class="tm-info uk-text-left">
								<i class="uk-icon-info uk-icon-hover"></i>
								<a href="#how-to-use" data-uk-modal>Как пользоваться конструктором</a>
							</div>
							<div class="tm-info uk-text-left">
								<i class="uk-icon-exclamation uk-icon-hover"></i>
								<span>Если Вы не можете воспользоваться конструктором, то любую модель картины мы можем сформировать за вас</span><a
									href="#git" data-uk-smooth-scroll>Помогите мне</a>
							</div>
						</div>
					</div>
					<!-- <img src="images/Canvas1.jpg" alt="canvas"> -->
					<!-- <i class="tm-canv-icon tm-undo uk-icon-mail-reply uk-icon-hover" ></i>
					<i class="tm-canv-icon tm-redo uk-icon-mail-forward uk-icon-hover" ></i>   -->
					<!-- <i class="tm-canv-icon tm-save uk-icon-save uk-icon-hover" data-uk-tooltip="{animation:'true'}" title="Сохранить"></i> -->
					<i class="tm-canv-icon sub close uk-icon-close uk-icon-hover"
					   data-uk-tooltip="{animation:'true'}" title="Удалить элемент"></i>
					<i class="tm-canv-icon sub check uk-icon-check uk-icon-hover"
					   data-uk-tooltip="{animation:'true'}" title="Готово"></i>
					<i class="tm-canv-icon sub square uk-icon-pencil-square-o uk-icon-hover"
					   data-uk-tooltip="{animation:'true'}" title="Добавить элемент"></i>
					<i class="tm-canv-icon sub trash uk-icon-trash-o uk-icon-hover"
					   data-uk-tooltip="{animation:'true'}" title="Добавить элемент"></i>

					<i class="tm-canv-icon org tm-draw uk-icon-pencil-square-o uk-icon-hover"
					   data-uk-tooltip="{animation:'true'}" title="Добавить элемент"></i>
					<i class="tm-canv-icon org tm-del uk-icon-close uk-icon-hover"
					   data-uk-tooltip="{animation:'true'}" title="Удалить элемент"></i>
					<i class="tm-canv-icon org tm-check uk-icon-check uk-icon-hover"
					   data-uk-tooltip="{animation:'true'}" title="Готово"></i>
					<i class="tm-canv-icon org tm-rem uk-icon-trash-o uk-icon-hover"
					   data-uk-tooltip="{animation:'true'}" title="Очистить всё"></i>
				</div>
			</div>
			<div class="tm-constructor-left">
				<form class="uk-form tm-constructor-form">
					<div class="uk-grid">
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<div class="uk-form-row">
								<label class="uk-form-label">Выбор изображения</label>
								<a href="#my-id" class="uk-text-center tm-api" data-uk-modal>Подобрать из
									каталога</a>
								<button class="tm-button-dis uk-text-center" disabled>Подобрать из каталога</button>
								<div id="my-id" class="uk-modal tm-modal">
									<div class="uk-modal-dialog uk-modal-dialog-large">
										<div class="uk-grid tm-modal-form-wrap">
											<div class="uk-width-large-1-3">
												<label class="uk-form-label tm-modal-label">Выберите
													картинку</label>
												<p class="tm-modal-info">Кликните по выбранной картинке, что бы
													загрузить её в конструктор</p>
											</div>
											<div class="uk-width-large-1-3 tm-modal-select">
												<p>Категория изображения</p>
												<select>
													<!-- Images categories value -->
													<?php include('images-categories.php'); ?>
													<!-- End Images categories value -->
												</select>
											</div>
											<div class="uk-width-large-1-3">
												<p>Поиск по названию</p>
												<div class="tm-modal-search-wrap">
													<input type="text" class="tm-modal-search"
													       placeholder="Абстрактное искусство">
													<div class="js-find"><i
															class="tm-canv-icon uk-icon-search uk-icon-hover"></i>
													</div>
												</div>
											</div>
										</div>
										<div class="uk-overflow-container">
											<div class="uk-grid tm-modal-pics">
												<? echo do_shortcode('[scap keyword="football"]'); ?>
												<!-- <div class="uk-width-large-1-4 uk-width-medium-1-3 uk-width-small-1-2 uk-margin-bottom">
													<img src="images/tpls/work1.jpg" alt="work1">
												</div> -->
											</div>
										</div>
										<a class="uk-modal-close uk-close"></a>
									</div>
								</div>

								<p class="uk-form-help-block">тут название выбранной картинки.jpg</p>
							</div>
						</div>
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<div class="uk-form-row">
								<label class="uk-form-label">Стоимость:</label>
								<div class="tm-constructor-form-price uk-text-center">
									<span class="js-total">0</span> р
								</div>
							</div>
						</div>
					</div>
					<div class="uk-grid">
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<div class="uk-form-row">
								<p class="uk-form-help-block">Или загрузите ваше изображение (jpg, png)</p>
								<input type="file" class="uk-hidden" oi-file="options" id="logo"
								       accept="image/*,image/jpeg,image/png,image/jpg">
								<!--  <img src="" id="imgprvw" alt="">   -->
								<a href="" class="js-file uk-text-center">Загрузить</a>
								<button class="tm-button-dis uk-text-center" disabled>Загрузить</button>
							</div>
						</div>
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<div class="uk-form-row">
								<!-- <button onclick="return false;" class="uk-button uk-button-primary">Загрузить</button> -->
								<!-- <i class="tm-canv-icon tm-api uk-icon-download uk-icon-hover"></i>  -->
							</div>
						</div>
					</div>

					<div class="uk-grid">
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<div class="uk-form-row">
								<label class="uk-form-label">Размер изображения (см)</label>
								<!-- <button class="dis" data-behaviour="toggle">DIS</button> -->
								<div class="tm-constructor-form-range">
									<div class="tm-constructor-val val-left">50</div>
									<div class="tm-constructor-val val-right">135</div>
									<input class="js-dimen" type="range" min="50" max="135" step="5" value="100"
									       data-buffer="0" data-rangeSlider/>
									<output class="tm-constructor-form-range-info"></output>
								</div>
							</div>
						</div>
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<div class="uk-form-row">

							</div>
						</div>
					</div>

					<div class="uk-grid">
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<div class="uk-form-row">
								<label class="uk-form-label">Материал</label>
								<select class="js-material">
									<!-- Material value -->
									<?php include('material.php'); ?>
									<!-- End material value -->
								</select>
							</div>
							<div class="uk-form-row">
								<label class="uk-form-label">Покрытие</label>
								<select class="js-covering">
									<!-- Covering value -->
									<?php include('covering.php'); ?>
									<!-- End covering value -->
								</select>
							</div>
						</div>
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<div class="uk-form-row">
								<div class="uk-form-row">
									<label class="uk-form-label">Виды подрамника</label>
									<select class="js-underframe">
										<!-- Underframe value -->
										<?php include('covering.php'); ?>
										<!-- End underframe value-->
									</select>
								</div>
								<div class="uk-form-row">
									<label class="uk-form-label">Стилизация</label>
									<div class="tm-style">
										<select class="js-stylization">
											<!-- Stylization value -->
											<?php include('stylization.php'); ?>
											<!-- End stylization value-->
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="uk-grid">
						<div class="uk-width-small-1-1 uk-width-medium-1-2 tm-custom">
							<button class="tm-constructor-form-order-btn tm-book uk-text-center" disabled>Заказать
							</button>
							<!-- <a href="#see-in" class="uk-button tm-api" data-uk-modal>Посмотреть в интерьере</a> -->
						</div>
					</div>

				</form>
			</div>

		</div>
	</div>

</div>