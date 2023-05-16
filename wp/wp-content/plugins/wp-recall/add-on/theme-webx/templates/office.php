<?php
/**
 * Template office
 */

?>
<div class="webx-main webx--padding">
    <div id="webx-header">
        <div class="webx-row">

            <div class="webx-col-md-9">
                <div id="lk-conteyner"><?php do_action( 'rcl_area_top' ); ?></div>
            </div>
        </div>
    </div>


    <div id="webx-content">
        <div class="webx-row container container--horizontal">
            <div class="webx-col-md-3 container container--vertical main-container" id="main-container">
                <div class="webx-area-menu">
                    <div class="section-header">Личный кабинет</div>

                    <div class="webx_phone_block container container--vertical" id="profileMenu">
                        <!-- <?php do_action( 'rcl_area_menu' ); ?> -->
                        <a href="http://localhost/kvartirant/wp/profile/?user" class="profile-navigation__link">
                            Профиль</a>
                        <a href="http://localhost/kvartirant/wp/prefs" class="profile-navigation__link"
                            target="_blank">Предпочтения</a>
                        <a href="http://localhost/kvartirant/wp/profile/?tab=chat"
                            class="profile-navigation__link">Сообщения</a>
                        <a href="http://localhost/kvartirant/wp/subscription"
                            class="profile-navigation__link">Подписка</a>
                        <a href="" class="profile-navigation__link" id="logoutLink">Выйти</a>
                    </div>
                </div>
            </div>
            <div class="webx-col-md-9 container container--vertical display-container" id="display-container">
                <div class="section-header" id="ProfileHeader"></div>
                <div class="container container--vertical" id="personal">
                    <div class="lk-sidebar">
                        <?php rcl_avatar( 200 ); ?>
                    </div>
                    <?php do_action( 'rcl_area_tabs' ); ?>
                </div>
            </div>
        </div>
    </div>
    <div id="webx-footer"></div>
</div>