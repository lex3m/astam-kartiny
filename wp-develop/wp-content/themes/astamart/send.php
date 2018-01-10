<?php
/*
Template Name: send
*/
?>
<?php
/**
 * The template for displaying all single posts
 * @package astamart
 */

get_header(); ?>
	<div class="tm-cont-wrap">
		<div class="tm-global-wrap uk-grid">
			<?php
			get_sidebar();
			?>
			<div class="tm-global-wrap-right uk-width-large-2-3 uk-width-medium-2-3 uk-width-small-1-1">
				<?php include('inc/page/global-wrap-before-content-sections.php'); ?>
				<!-- sec2 start-->
				<section>
					<div class="tm-sec2-wrap">
						<?php echo $_POST;?>
						<form id="form">
							<input type="text" name="name" required="required"/>
							<input type="text" name="phone" required="required"/>
							<input type="submit" value="Заказать звонок"/>
						</form>

						<?
						if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
							$to = 'gonchar.a.v@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
							$subject = 'Обратный звонок'; //Загаловок сообщения
							$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
							$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
							$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
							mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
						}
						?>

					</div>
				</section>
				<!-- sec2 end-->
				<?php include('inc/page/global-wrap-after-content-sections.php');?>
			</div>
		</div> <!-- Grid end -->
		<section class="tm-calculation-wrap"><!-- Calculation Start -->
			<div id="git" class="tm-content-full">
				<h1 class="uk-text-center">Заказать расчет стоимости</h1>
				<div class="tm-git-wrap">
					<div class="tm-git-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eaque eveniet ipsam tempore aliquid doloribus dolores ut nulla nobis optio adipisci, debitis eligendi odio animi cum culpa quaerat nihil itaque est tenetur repellendus. Sapiente quia, numquam eius reiciendis ratione blanditiis dignissimos totam alias iste accusamus dolorum corporis itaque ea optio ex. Fugit in quisquam, ipsam, tempora consequuntur fuga atque vitae!
					</div>
					<?php include('inc/front-page/contact-form.php'); ?>
				</div>
			</div>
		</section><!-- Calculation End -->
		<section class="tm-contacts-wrap"><!-- Contacts Start -->
			<?php include('inc/front-page/contacts.php'); ?>
		</section><!-- Contacts End -->
		<div class="tm-map-wrap"><!-- Map Start -->
			<?php include('inc/front-page/maps.php'); ?>
		</div><!-- Map End -->
	</div>

<?php
get_footer();

