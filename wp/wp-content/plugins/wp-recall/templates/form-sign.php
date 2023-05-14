<?php
global $typeform;

$f_sign = ( ! $typeform || $typeform == 'sign' ) ? 'display:block;' : '';

?>

<div class="form-tab-rcl signin-form sign-form" id="login-form-rcl" style="<?php echo esc_attr( $f_sign ); ?>">


    <div class="form-block-rcl sign-form__header">Войти</div>

    <?php $user_login = ( isset( $_REQUEST['user_login'] ) ) ? sanitize_user( wp_unslash( $_REQUEST['user_login'] ) ) : ''; ?>

    <form action="<?php rcl_form_action( 'login' ); ?>" method="post">
        <div class="form-block-rcl default-field">
            <input required type="text" placeholder="<?php esc_html_e( 'Login', 'wp-recall' ); ?>"
                value="<?php echo esc_attr( $user_login ); ?>" name="user_login">

        </div>
        <div class="form-block-rcl default-field">
            <input required type="password" placeholder="<?php esc_html_e( 'Password', 'wp-recall' ); ?>" value=""
                name="user_pass">

        </div>
        <span class="caption">Впервые здесь?</span>
        <div class="form-block-rcl">
            <?php
			//phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo rcl_get_button( array(
				'label'     => esc_html__( 'Войти', 'wp-recall' ),
				'submit'    => true,
				'fullwidth' => true,
				'size'      => 'medium',
				'icon'      => 'fa-sign-in',
				'class'     => 'link-tab-form', 
                'id'        => 'signin-special'
			) );
			?>
            <?php
			//phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo wp_nonce_field( 'login-key-rcl', 'login_wpnonce', true, false );
			?>
            <input type="hidden" name="redirect_to" value="<?php rcl_referer_url( 'login' ); ?>">
        </div>
    </form>
</div>