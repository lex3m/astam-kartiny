<?

if(isset($_POST)){
	$name= $_POST['name'];
	$phone = $_POST['phone'];
	$mail = $_POST['mail'];
	$delivery = $_POST['delivery'];
	$payment = $_POST['payment'];
	$address = $_POST['address'];
	$info = $_POST['info'];
	$orders = $_POST['order'];
	$total = $_POST['total'];
	if(get_magic_quotes_gpc()){
		$orders = stripslashes($orders);
	}
}

$to = ' astamlex@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Заказ картины | Astamart.ru';
$message = '
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Заказ картины | Astamart.ru</title>
</head>
<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tbody><tr>
        <td align="center" valign="top" bgcolor="#00c3cc" style="background-color:#00c3cc;"><br>
            <br>
            <table width="800" border="0" cellspacing="0" cellpadding="0">
                <tbody><tr>
                    <td align="center" valign="top" style="padding-left:13px; padding-right:13px; background-color:#ffffff;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr>
                            <td align="left" valign="middle" style="font-size: 24px;color: #253c7f;padding: 10px 0;font-family: \'Roboto\';font-weight: 300;">Поступил заказ на производство модульной картины с сайта astamart.ru!</td>
                        </tr>
                         <tr>
                            <td align="center" valign="middle" style="font-size: 32px;color: #253c7f;padding: 20px 0;font-family: \'Roboto\';font-weight: 300;">
	                            <br>
	                            <br>
	                            Данные заказа
	                            <br>
	                            <br>
                            </td>
                        </tr>
                        <!-- Order-->';
						$orderNumber = 1;
						foreach($orders as $order) {
	                    $message.=  '
						<tr>
                            <td align="center" valign="middle" style="font-size: 32px;color: #253c7f;padding: 10px 0;font-family: \'Roboto\';font-weight: 300;"><i>Заказ #'.$orderNumber++.'</i></td>
                        </tr>
                        <tr>
                            <td>
                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                    <tr>
                                        <td align="left" valign="middle" style="font-size: 16px;color: #253c7f;font-family: \'Roboto\', sans-serif;font-weight: 400;text-decoration: underline;"></td>
                                        <td align="left" valign="middle" style="font-size: 16px;color: #253c7f;font-family: \'Roboto\', sans-serif;font-weight: 400;text-decoration: underline;padding-left: 20px;">Параметры картины</td>
                                        <td align="left" valign="middle" style="font-size: 16px;color: #253c7f;font-family: \'Roboto\', sans-serif;font-weight: 400;text-decoration: underline;padding-left: 20px">Размеры частей картины</td>
                                    </tr>
                                    <tr>
                                        <td align="left" valign="middle"  width="30%" style="font-size:16px;">
                                            <img src="http://astamart.ru/uploader/uploads/'.$order["img"].'" width="100%" height="auto" alt="">
                                            <a href="http://astamart.ru/uploader/uploads/'.$order["img"].'" download="'.$order["img"].'" style="text-decoration: none;">
                                        <span style="text-align: center; display: block;font-size: 14px;color: black;font-weight: bold;background: cyan;width: 80%;margin: 0 auto;border-radius: 15px;padding: 5px;">
                                            Скачать картинку
                                        </span></a>
                                        </td>
                                        <td align="left"  valign="top" width="40%" style="font-size:16px;padding-left: 0;">
                                            <ul style="list-style-type: none; text-align: left; display: block;padding-left: 20px;margin-top: 5px;">
                                                <li>Размер изображения: <strong>'.$order["imgsize"].'</strong></li>
                                                <li>Материал: <strong>'.$order["material"].'</strong></li>
                                                <li>Виды подрамника: <strong>'.$order["underframe"].'</strong></li>
                                                <li>Покрытие: <strong>'.$order["covering"].'</strong></li>
                                                <li>Стилизация: <strong>'.$order["stylization"].'</strong></li>
                                            </ul>
                                        </td>
                                        <td align="left" valign="top" style="font-size:16px; width:28%;padding-left: 20px;">
                                            <ol style=" text-align: left; display: block; padding-left: 15px;margin-top: 5px;">';
		                                    foreach ($order["mes"] as $orderMes){
			                                    $message.= '<li>Ширина: <strong>'.$orderMes["width"].'</strong>, Высота: <strong>'.$orderMes["height"].'</strong></li>';
		                                    }
	                            $message.='                                     
                                            </ol>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td align="right" valign="middle" style="font-size:16px;"><strong style="color: #253c7f;font-family: \'Roboto\', sans-serif;font-weight: 400;">Цена:</strong> '.number_format($order["sum"],0,'',' ').' руб.</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <br>
                                <hr>
                                <br>
                            </td>
                        </tr>
                        <!-- END Order-->';
					}
$message.=  '		 	<tr>
                            <td align="right" valign="top" style="text-align: right;font-size: 32px;color: #253c7f;padding:0;font-family: \'Roboto\';font-weight: 300;">Итого: '.number_format($total,0,'',' ').' руб.</td>
                        </tr>

					 <!-- User data-->
					 
					   <tr>
                            <td align="center" valign="middle" style="font-size: 32px;color: #253c7f;padding: 20px 0;font-family: \'Roboto\';font-weight: 300;">
	                            <br>
	                            <br>
	                            Данные клиента
	                            <br>
	                            <br>
                            </td>
                        </tr>

                        <tr>
                            <td>

                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                    <tr>
                                        <td align="left" valign="middle" width="50%" style="font-size: 16px;font-family: \'Roboto\', sans-serif;font-weight: 400;padding-left:20px;">
                                            <span style="color: #253c7f;">Имя клиента:</span> '.$name.'<br>
                                            <span style="color: #253c7f;">Телефон:</span> '.$phone.'<br>
                                            <span style="color: #253c7f;">E-mail:</span> '.$mail.'<br>
                                        </td>
                                        <td align="left" valign="middle" width="50%" style="font-size: 16px;font-family: \'Roboto\', sans-serif;font-weight: 400;padding-left:20px;">
                                            <span style="color: #253c7f;">Способ доставки:</span> '.$delivery.'<br>
                                            <span style="color: #253c7f;">Способ оплаты:</span> '.$payment.'<br>
                                            <span style="color: #253c7f;">Адрес доставки:</span> '.$address.'<br>
                                        </td>
                                    </tr>
                                    <!-- END User data-->
                                    </tbody></table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <br>
                            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td align="left" valign="middle"  style="font-size: 16px;font-family: \'Roboto\', sans-serif;font-weight: 400;padding-left: 20px;"><span style="font-size: 16px;color: #253c7f;">Сообщение:</span> '.$info.'</td>
                                </tr>
                                </tbody></table>
                            </td>
                        </tr>
                </tbody></table>
            <br>
            <br></td>

                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody></table>
</body>
</html>
';

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Astamart <noreply@astamart.ru>\r\n";
mail($to, $subject, $message, $headers);
