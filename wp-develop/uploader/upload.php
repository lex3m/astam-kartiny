<?php
 
// Здесь нужно сделать все проверки передаваемых файлов и вывести ошибки если нужно
 
// Переменная ответа
 
$data = array();
 
if( isset( $_GET['uploadfiles'] ) ){
    $error = false;
    $files = array();
 
    $uploaddir = './uploads/'; // . - текущая папка где находится submit.php
 
    // Создадим папку если её нет
 
    if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );
 
    // переместим файлы из временной директории в указанную
    foreach( $_FILES as $file ){
    	$fileType =  end(explode(".", $file['name']));
    	$fileName = mb_strimwidth(base64_encode($file['name']), 0, 14).'.'. $fileType;
        if( move_uploaded_file( $file['tmp_name'], $uploaddir . basename($fileName) ) ){
            $files[] = realpath( $uploaddir . $fileName.'.'. $fileType);
        }
        else{
            $error = true;
        }
    }
 
    $data = $error ? array('error' => 'Ошибка загрузки файлов.') : array('files' => $files , 'fileName' => $fileName);
 
    echo json_encode( $data );
}