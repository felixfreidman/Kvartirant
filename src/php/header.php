<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo get_bloginfo('name'); ?></title>
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri() . '/assets/images/content/main_logo.svg' ?>"
        type="image/x-icon">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url');?>">
</head>

<body>
    <header class="header">
        <div class="logo-container"><a href="<?php echo home_url(); ?>"> <img class="logo" id="toMain"
                    src="<?php echo get_template_directory_uri() . '/assets/images/content/main_logo.svg' ?>"
                    alt="Company Logo"></a><span class="logo-caption">Кукушка</span></div>
        <div class="navigation"><a class="navigation-link" href="<?php echo home_url() . '#toBenefits' ?>">О
                системе</a><a class="navigation-link" href="<?php echo home_url() . '#toProcess' ?>">Как работает</a><a
                class="navigation-link" href="<?php echo home_url() . '#toAbilities' ?>">Возможности</a><a
                class="navigation-link" href="<?php echo home_url() . '#toHelp' ?>">Помощь</a></div>
        <div class="contacts">
            <a href="tel:<?php echo get_field("phone_num", 'option'); ?>">
                <?php echo get_field("phone_num", 'option'); ?></a>
        </div>
        <div class="apply">
            <div class="apply-btn" id="headerApply"> Оставить заявку</div>
        </div>
    </header>
    <div class="mobile-header">
        <div class="logo-container"><a href="<?php echo home_url(); ?>"> <img class="logo" id="toMain"
                    src="<?php echo get_template_directory_uri() . '/assets/images/content/main_logo.svg' ?>"
                    alt="Company Logo"></a><span class="logo-caption">Кукушка</span></div>
        <div class="mobile-header__burger-menu ">
            <span class="cross-one--mobile"></span><span class="cross-two--mobile"></span><span
                class="cross-left"></span>
        </div>
    </div>
    <div class="mobile-menu">
        <div class="navigation" id="mobileNavigation">
            <a class="navigation-link" href="<?php echo home_url() . '#toBenefits' ?>">О системе</a>
            <a class="navigation-link" href="<?php echo home_url() . '#toProcess' ?>">Как работает</a>
            <a class="navigation-link" href="<?php echo home_url() . '#toAbilities' ?>">Возможности</a>
            <a class="navigation-link" href="<?php echo home_url() . '#toHelp' ?>">Помощь</a>
        </div>
        <div class="contacts">
            <a
                href="tel:<?php echo get_field("phone_num", 'option'); ?>"><?php echo get_field("phone_num", 'option'); ?></a>
        </div>
        <div class="apply">
            <div class="apply-btn" id="headerApply">Получить ДЕМО-ДОСТУП</div>
        </div>
    </div>