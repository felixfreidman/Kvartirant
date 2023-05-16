<?php /* Template Name: Subscription Page */?>
<?php get_header()?>
<main class="main-profile main-profile--subscriptions">
    <div class="opener" id="menuOpener">
        <span class="checkSpan"></span>
        <span class="checkSpan"></span>
    </div>
    <?php wp_nav_menu( 'header' );?>
    <div class="container container--horizontal">
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
                    <a href="http://localhost/kvartirant/wp/subscription" class="profile-navigation__link">Подписка</a>
                    <a href="" class="profile-navigation__link" id="logoutLink">Выйти</a>
                </div>
            </div>
        </div>
        <div class="container container--horizontal display-container">
            <div class="container container--vertical">
                <div class="container-header">Моя подписка</div>
                <div class="container container--horizontal">
                    <div class="sub-card sub-card--active">
                        <div class="sub-card__header">
                            <img src="<?php echo get_template_directory_uri() . '/assets/images/content/check_logo.svg'?>"
                                alt="" class="sub-card__logo">
                            <span class="sub-card__header-content">Базовая</span>
                        </div>
                        <div class="sub-card__list">
                            <div class="sub-card__list-item">
                                <div class="sub-card__bullet"></div>
                                <div class="sub-card__item-content">Объявления проверяются роботом</div>
                            </div>
                            <div class="sub-card__list-item">
                                <div class="sub-card__bullet"></div>
                                <div class="sub-card__item-content">Все актуальные объявления со всех доступных
                                    источников
                                </div>
                            </div>
                            <div class="sub-card__list-item">
                                <div class="sub-card__bullet"></div>
                                <div class="sub-card__item-content">Объявления от всех пользователей площадок</div>
                            </div>
                        </div>
                    </div>
                    <div class="sub-card">
                        <div class="sub-card__header">
                            <img src="<?php echo get_template_directory_uri() . '/assets/images/content/premium_logo.svg'?>"
                                alt="" class="sub-card__logo">
                            <span class="sub-card__header-content">Премиум</span>
                        </div>
                        <div class="sub-card__list">
                            <div class="sub-card__list-item">
                                <div class="sub-card__bullet"></div>
                                <div class="sub-card__item-content">Объявления проверяются человеком</div>
                            </div>
                            <div class="sub-card__list-item">
                                <div class="sub-card__bullet"></div>
                                <div class="sub-card__item-content">Все актуальные объявления со всех доступных
                                    источников
                                </div>
                            </div>
                            <div class="sub-card__list-item">
                                <div class="sub-card__bullet"></div>
                                <div class="sub-card__item-content">Все объявления от собственников</div>
                            </div>
                            <div class="sub-card__list-item">
                                <div class="sub-card__bullet"></div>
                                <div class="sub-card__item-content">Персонализированный подход</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</main>
<?php get_footer()?>