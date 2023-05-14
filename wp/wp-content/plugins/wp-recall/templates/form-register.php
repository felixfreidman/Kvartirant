<?php
global $typeform;
$f_reg = ( $typeform == 'register' ) ? 'display:block;' : '';
?>

<div class="sign-form form-tab-rcl signup-form js--hidden" id="register-form-rcl"
    style="<?php echo esc_attr( $f_reg ); ?>">


    <div class="form-block-rcl sign-form__header">Зарегистрироваться</div>

    <?php $user_login = ( isset( $_REQUEST['user_login'] ) ) ? sanitize_user( wp_unslash( $_REQUEST['user_login'] ) ) : ''; ?>
    <?php $user_email = ( isset( $_REQUEST['user_email'] ) ) ? sanitize_email( wp_unslash( $_REQUEST['user_email'] ) ) : ''; ?>

    <form action="<?php rcl_form_action( 'register' ); ?>" method="post" enctype="multipart/form-data"
        id="signup-special">
        <div class="form-block-rcl default-field">
            <input required type="text" placeholder="<?php esc_html_e( 'Login', 'wp-recall' ); ?>"
                value="<?php echo esc_attr( $user_login ); ?>" name="user_login" id="login-user">

        </div>
        <div class="form-block-rcl default-field">
            <input required type="email" placeholder="<?php esc_html_e( 'E-mail', 'wp-recall' ); ?>"
                value="<?php echo esc_attr( $user_email ); ?>" name="user_email" id="email-user">

        </div>
        <div class="form-block-rcl form_extend">
            <?php do_action( 'register_form' ); ?>
        </div>
        <span class="caption">Забыли пароль?</span>
        <div class="form-block-rcl">
            <?php
			//phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo rcl_get_button( array(
				'label'     => __( 'Войти', 'wp-recall' ),
				'submit'    => true,
				'icon'      => 'fa-book',
				'size'      => 'medium',
				'fullwidth' => true,
                'id'        => 'signup-special'
			) );
			?>

            <?php
			//phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo wp_nonce_field( 'register-key-rcl', 'register_wpnonce', true, false );
			?>
            <input type="hidden" name="redirect_to" value="<?php rcl_referer_url( 'register' ); ?>">
        </div>
    </form>
</div>