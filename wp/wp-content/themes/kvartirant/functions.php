<?php
// /**
//  * QQ Theme functions and definitions
//  *
//  */
// function qq_theme_support()
// {
//     wp_enqueue_style("style.min.css", 'all');
//     add_theme_support('post-thumbnails');
//     set_post_thumbnail_size(1200, 9999);
//     add_image_size('twentytwenty-fullscreen', 1980, 9999);
//     add_theme_support('title-tag');
// }

// add_action("after_setup_theme", "qq_theme_support");

// // Настройка для админки

// if (function_exists('acf_add_options_page')) {

//     acf_add_options_page(array(
//         'page_title' => 'Основные настройки',
//         'menu_title' => 'Настройки сайта',
//         'menu_slug' => 'theme-general-settings',
//         'capability' => 'edit_posts',
//         'redirect' => false,
//     ));
// }

// // Register Styles and Scripts

// function qq_register_styles()
// {

//     wp_enqueue_style('main-style-css', get_stylesheet_uri() . "/main.min.css");
// }

// add_action('wp_enqueue_scripts', 'qq_register_styles');

// function qq_register_scripts()
// {
//     wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.min.js');
// }


// add_action('wp_enqueue_scripts', 'qq_register_scripts');

// // AJAX и отправка писем

// function ajax_form_scripts()
// {
//     $translation_array = array(
//         'ajax_url' => admin_url('admin-ajax.php'),
//     );
//     wp_localize_script('main', 'cpm_object', $translation_array);
// }

// add_action('wp_enqueue_scripts', 'ajax_form_scripts');
// function ajax_form()
// {
//     $name = $_REQUEST['name'];
//     $phone = $_REQUEST['phone'];
//     $company = $_REQUEST['company'];
//     $area = $_REQUEST['area'];
//     $response = '';
//     $thm = 'Заявка на демо-доступ';
//     $thm = "=?utf-8?b?" . base64_encode($thm) . "?=";
//     $msg = "Имя: " . $name . "<br />
//     Телефон: " . $phone . "<br />
//     Название компании: " . $company . "<br />
//     Область деятельности: " . $area . "<br />";
//     $mail_to = get_field("email_to", 'option');

//     $headers = "Content-Type: text/html; charset=utf-8\n";
//     $headers .= 'От: Кукушки.Посадка' . "\r\n";

// // Отправляем почтовое сообщение

//     if (mail($mail_to, $thm, $msg, $headers)) {
//         $response = '<div class="applied-screen" id="appliedForm">
// <div class="form-close" id="closeAppliedForm"><span class="cross-one"> </span><span class="cross-two"></span>
// </div><img class="applied-icon"
//     src="http://qq.bezrealtora.ru/wp-content/themes/qq/assets/images/content/main_applied.png"
// alt="Form Applied">
// <div class="applied-header">Заявка успешно отправлена!</div>
// <div class="applied-subheader"> Мы свяжемся с вами в ближайшее время!
//     По всем интересующим вопросам вы можете позвонить нам по телефону <a href="tel:+74951864203">+7 (495)
//         186-42-03</a></div>
// <div class="form-button form-button--form" id="closeAppliedFormButton">Вернуться на сайт</div>
// </div>';
//     } else {
//         $response = 'Ошибка при отправке';
//     }

// // Сообщение о результате отправки почты

//     if (defined('DOING_AJAX') && DOING_AJAX) {
//         echo $response;
//         wp_die();
//     }
// }

// add_action('wp_ajax_nopriv_ajax_form', 'ajax_form');
// add_action('wp_ajax_ajax_form', 'ajax_form');
?>

<?php


function kvartitant_scripts() {
	wp_enqueue_style( 'kvartirant-style', get_template_directory_uri() . '/style.min.css' );
}
add_action( 'wp_enqueue_scripts', 'kvartitant_scripts' );



add_shortcode('rcl-form', 'my_rcl_form');
function my_rcl_form(){
 
    $fields = array(
        array(
            'type' => 'text',
            'slug' => 'kolichestvo_komnat_646110dc3ef18',
            'title' => __('Текстовое поле'),
            'placeholder' => __('Заполните это поле'),
            'required' => 1,
            'notice' => __('тут какое то примечание к полю')
        ),
        array(
            'type' => 'select',
            'slug' => 'field_two',
            'title' => __('Выпадающий список'),
            'values' => array(
                __('один'),
                __('два'),
                __('три')
            ),
            'notice' => __('выберите одно из значений')
        ),
        array(
            'type' => 'textarea',
            'slug' => 'field_three',
            'title' => __('Многострочное поле'),
            'placeholder' => __('Напишите хоть что то...'),
            'required' => 1,
            'notice' => __('еще одно примечание к текстовому полю')
        ),
        array(
            'type' => 'hidden',
            'slug' => 'my_form_submit',
            'value' => 1
        )
    );
 
    //первая форма
    $form = rcl_get_form(array(
        'onclick' => 'rcl_send_form_data("my_first_form_process", this);return false;',
        'submit' => __('Передать'),
        'fields' => $fields
    ));
 
    return $form;
}
//обработчик первой формы
rcl_ajax_action('my_first_form_process');
function my_first_form_process(){
 
    rcl_verify_ajax_nonce();
 
    //тут обрабатываем данные с первой формы
    //строим вторую форму и отправляем ее в диалоговом окне
 
 
}


add_action( 'show_user_profile', 'add_pref_fields' );
add_action( 'edit_user_profile', 'add_pref_fields' );

function add_pref_fields( $user )
{
    ?>
<h3>Дополнительные данные пользователя</h3>

<table class="form-table">
    <tr>
        <th><label for="roomAmount_pref">Количество Комнат</label></th>
        <td><input type="text" name="roomAmount_pref"
                value="<?php echo esc_attr(get_the_author_meta( 'roomAmount_pref', $user->ID )); ?>"
                class="regular-text" />
        </td>
    </tr>

    <tr>
        <th><label for="repair_pref">Ремонт</label></th>
        <td><input type="text" name="repair_pref"
                value="<?php echo esc_attr(get_the_author_meta( 'repair_pref', $user->ID )); ?>" class="regular-text" />
        </td>
    </tr>

    <tr>
        <th><label for="animals_pref">Животные</label></th>
        <td><input type="text" name="animals_pref"
                value="<?php echo esc_attr(get_the_author_meta( 'animals_pref', $user->ID )); ?>"
                class="regular-text" />
        </td>
    </tr>
    <tr>
        <th><label for="money_pref">Бюджет</label></th>
        <td><input type="text" name="money_pref"
                value="<?php echo esc_attr(get_the_author_meta( 'money_pref', $user->ID )); ?>" class="regular-text" />
        </td>
    </tr>
    <tr>
        <th><label for="area_pref">Районы поиска</label></th>
        <td><input type="text" name="area_pref"
                value="<?php echo esc_attr(get_the_author_meta( 'area_pref', $user->ID )); ?>" class="regular-text" />
        </td>
    </tr>
</table>
<?php
}
 