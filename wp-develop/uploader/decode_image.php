<?php
define('UPLOAD_DIR', 'uploads/');
$img = $_POST['img'];
if(isset($img)){
	$img = str_replace(['data:image/jpeg;base64', 'data:image/png;base64', 'data:image/jpg;base64'], '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . 'txtimg.png';
	$success = file_put_contents($file, $data);
}
