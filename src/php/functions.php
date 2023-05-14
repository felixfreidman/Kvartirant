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
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

// This theme requires WordPress 5.3 or later.
if ( version_compare( $GLOBALS['wp_version'], '5.3', '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
}


function twenty_twenty_one_scripts() {
	// Note, the is_IE global variable is defined by WordPress and is used
	// to detect if the current browser is internet explorer.
	global $is_IE, $wp_scripts;
	if ( $is_IE ) {
		// If IE 11 or below, use a flattened stylesheet with static values replacing CSS Variables.
		wp_enqueue_style( 'twenty-twenty-one-style', get_template_directory_uri() . '/assets/css/ie.css', array(), wp_get_theme()->get( 'Version' ) );
	} else {
		// If not IE, use the standard stylesheet.
		wp_enqueue_style( 'twenty-twenty-one-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get( 'Version' ) );
	}

	// RTL styles.
	wp_style_add_data( 'twenty-twenty-one-style', 'rtl', 'replace' );

	// Print styles.
	wp_enqueue_style( 'twenty-twenty-one-print-style', get_template_directory_uri() . '/assets/css/print.css', array(), wp_get_theme()->get( 'Version' ), 'print' );

	// Threaded comment reply styles.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Register the IE11 polyfill file.
	wp_register_script(
		'twenty-twenty-one-ie11-polyfills-asset',
		get_template_directory_uri() . '/assets/js/polyfills.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	// Register the IE11 polyfill loader.
	wp_register_script(
		'twenty-twenty-one-ie11-polyfills',
		null,
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
	wp_add_inline_script(
		'twenty-twenty-one-ie11-polyfills',
		wp_get_script_polyfill(
			$wp_scripts,
			array(
				'Element.prototype.matches && Element.prototype.closest && window.NodeList && NodeList.prototype.forEach' => 'twenty-twenty-one-ie11-polyfills-asset',
			)
		)
	);

	// Main navigation scripts.
	if ( has_nav_menu( 'primary' ) ) {
		wp_enqueue_script(
			'twenty-twenty-one-primary-navigation-script',
			get_template_directory_uri() . '/assets/js/primary-navigation.js',
			array( 'twenty-twenty-one-ie11-polyfills' ),
			wp_get_theme()->get( 'Version' ),
			true
		);
	}

	// Responsive embeds script.
	wp_enqueue_script(
		'twenty-twenty-one-responsive-embeds-script',
		get_template_directory_uri() . '/assets/js/responsive-embeds.js',
		array( 'twenty-twenty-one-ie11-polyfills' ),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'twenty_twenty_one_scripts' );

/**
 * Enqueue block editor script.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_block_editor_script() {

	wp_enqueue_script( 'twentytwentyone-editor', get_theme_file_uri( '/assets/js/editor.js' ), array( 'wp-blocks', 'wp-dom' ), wp_get_theme()->get( 'Version' ), true );
}

add_action( 'enqueue_block_editor_assets', 'twentytwentyone_block_editor_script' );

/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @link https://git.io/vWdr2
 */
function twenty_twenty_one_skip_link_focus_fix() {

	// If SCRIPT_DEBUG is defined and true, print the unminified file.
	if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
		echo '<script>';
		include get_template_directory() . '/assets/js/skip-link-focus-fix.js';
		echo '</script>';
	} else {
		// The following is minified via `npx terser --compress --mangle -- assets/js/skip-link-focus-fix.js`.
		?>
<script>
/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window
    .addEventListener("hashchange", (function() {
        var t, e = location.hash.substring(1);
        /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i
            .test(t.tagName) || (t.tabIndex = -1), t.focus())
    }), !1);
</script>
<?php
	}
}
add_action( 'wp_print_footer_scripts', 'twenty_twenty_one_skip_link_focus_fix' );

/**
 * Enqueue non-latin language styles.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */

/**
 * Enqueue scripts for the customizer preview.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_customize_preview_init() {
	wp_enqueue_script(
		'twentytwentyone-customize-helpers',
		get_theme_file_uri( '/assets/js/customize-helpers.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	wp_enqueue_script(
		'twentytwentyone-customize-preview',
		get_theme_file_uri( '/assets/js/customize-preview.js' ),
		array( 'customize-preview', 'customize-selective-refresh', 'jquery', 'twentytwentyone-customize-helpers' ),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'customize_preview_init', 'twentytwentyone_customize_preview_init' );

/**
 * Enqueue scripts for the customizer.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_customize_controls_enqueue_scripts() {

	wp_enqueue_script(
		'twentytwentyone-customize-helpers',
		get_theme_file_uri( '/assets/js/customize-helpers.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'customize_controls_enqueue_scripts', 'twentytwentyone_customize_controls_enqueue_scripts' );

/**
 * Calculate classes for the main <html> element.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twentytwentyone_the_html_classes() {
	/**
	 * Filters the classes for the main <html> element.
	 *
	 * @since Twenty Twenty-One 1.0
	 *
	 * @param string The list of classes. Default empty string.
	 */
	$classes = apply_filters( 'twentytwentyone_html_classes', '' );
	if ( ! $classes ) {
		return;
	}
	echo 'class="' . esc_attr( $classes ) . '"';
}

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
 