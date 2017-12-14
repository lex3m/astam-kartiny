<?php
/**
Template Page for the album overview

Follow variables are useable :

$album     	 : Contain information about the first album
$albums    	 : Contain information about all albums
$galleries   : Contain all galleries inside this album
$pagination  : Contain the pagination content

You can check the content when you insert the tag <?php var_dump($variable) ?>
If you would like to show the timestamp of the image ,you can use <?php echo $exif['created_timestamp'] ?>
 **/
?>
<?php if (!defined ('ABSPATH')) die ('No direct access allowed'); ?><?php if (!empty ($galleries)) : ?>

    <!-- List of galleries -->
	<?php foreach ($galleries as $gallery) : ?>
        <div class="uk-width-large-1-3 uk-width-medium-1-2 uk-width-small-1-1 uk-text-center uk-margin-bottom">
            <a href="<?php echo nextgen_esc_url($gallery->pagelink); ?>">
                <img alt="<?php echo esc_attr($gallery->title); ?>" src="<?php echo esc_attr($gallery->previewpic_fullsized_url); ?>"/>
            </a>
        </div>
	<?php endforeach; ?>
<?php endif; ?>
