<?php /* Template Name: Main Page */?>
<?php get_header()?>
<main class="main">
    <div class="greeting-section">
        <div class="container container--vertical">
            <div class="page-header">Самый простой способ <br>
                найти квартиру</div>
            <div class="header-list">
                <div class="list-item">
                    <div class="list-bullet"></div>
                    Быстрый поиск желаемой квартиры
                </div>
                <div class="list-item">
                    <div class="list-bullet"></div>
                    Поиск по вашим параметрам
                </div>
                <div class="list-item">
                    <div class="list-bullet"></div>
                    Бесплатно
                </div>
            </div>
        </div>
        <form class="form-small">
            <div class="form-small__header">Мы вам перезвоним и <br>ответим на все важные<br> вопросы</div>
            <input type="text" class="form-small__input" name="greeting-name" placeholder="Имя">
            <input type="text" class="form-small__input" name="greeting-phone" placeholder="+7 (000) 000-00-00">
            <input type="submit" class="form-small__button" name="greeting-submit" value="Отправить">
        </form>
    </div>
    <div class="why-section">
        <div class="section-header">Найдите квартиру с помощью <br>
            нашего сервиса</div>
        <div class="container container--horizontal">
            <div class="why-card">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/content/search.gif'?>" alt=""
                    class="why-card__img">
                <div class="why-card__header">Поиск по вашим параметрам</div>
                <div class="why-card__caption">часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой"</div>
            </div>
            <div class="why-card">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/content/realty.gif'?>" alt=""
                    class="why-card__img">
                <div class="why-card__header">Объявления со всего Интернета</div>
                <div class="why-card__caption">часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой</div>
            </div>
            <div class="why-card">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/content/follow.gif'?>" alt=""
                    class="why-card__img">
                <div class="why-card__header">Социальные сети</div>
                <div class="why-card__caption">часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века.
                    В то время некий </div>
            </div>
            <div class="why-card">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/content/actual.gif'?>" alt=""
                    class="why-card__img">
                <div class="why-card__header">Актуальные объявления</div>
                <div class="why-card__caption">часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. </div>
            </div>
        </div>
    </div>
    <div class="adt-section">
        <div class="section-header">Потенциальные предложения</div>
        <div class="container container--vertical">
            <div class="container container--horizontal">
                <div class="adt-card">
                    <div class="adt-card__images">
                        <div class="swiper swiper-adt">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                            </div>
                            <div class="pagination-container">
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                    <div class="adt-card__container">
                        <div class="adt-card__header">2-к комнатная квартира, 102.8 м</div>

                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/price_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">23.000 ₽ / мес.
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/location_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">мкрн. Университетский, 45
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/stairs_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">2 / 8 эт.
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img">
                                <img src="<?php echo get_template_directory_uri() . '/assets/images/content/rooms_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">2 комнаты
                            </div>
                        </div>
                    </div>
                </div>
                <div class="adt-card">
                    <div class="adt-card__images">
                        <div class="swiper swiper-adt">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                            </div>
                            <div class="pagination-container">
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                    <div class="adt-card__container">
                        <div class="adt-card__header">2-к комнатная квартира, 102.8 м</div>

                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/price_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">23.000 ₽ / мес.
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/location_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">мкрн. Университетский, 45
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/stairs_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">2 / 8 эт.
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img">
                                <img src="<?php echo get_template_directory_uri() . '/assets/images/content/rooms_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">2 комнаты
                            </div>
                        </div>
                    </div>
                </div>
                <div class="adt-card">
                    <div class="adt-card__images">
                        <div class="swiper swiper-adt">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                            </div>
                            <div class="pagination-container">
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                    <div class="adt-card__container">
                        <div class="adt-card__header">2-к комнатная квартира, 102.8 м</div>

                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/price_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">23.000 ₽ / мес.
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/location_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">мкрн. Университетский, 45
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/stairs_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">2 / 8 эт.
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img">
                                <img src="<?php echo get_template_directory_uri() . '/assets/images/content/rooms_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">2 комнаты
                            </div>
                        </div>
                    </div>
                </div>
                <div class="adt-card">
                    <div class="adt-card__images">
                        <div class="swiper swiper-adt">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="<?php echo get_template_directory_uri() . '/assets/images/content/background1.jpg'?>"
                                        alt="">
                                </div>
                            </div>
                            <div class="pagination-container">
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                    <div class="adt-card__container">
                        <div class="adt-card__header">2-к комнатная квартира, 102.8 м</div>

                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/price_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">23.000 ₽ / мес.
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/location_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">мкрн. Университетский, 45
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img"><img
                                    src="<?php echo get_template_directory_uri() . '/assets/images/content/stairs_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">2 / 8 эт.
                            </div>
                        </div>
                        <div class="adt-card__row">
                            <div class="adt-card__img">
                                <img src="<?php echo get_template_directory_uri() . '/assets/images/content/rooms_logo.svg'?>"
                                    alt="">
                            </div>
                            <div class="adt-card__caption">2 комнаты
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="form-section">
        <div class="form-container">
            <div class="container container--horizontal">
                <div class="form-container__header-container">
                    <div class="form-container__header">Остались вопросы?</div>
                    <div class="form-container__subheader">Оставьте заявку и мы вам перезвоним</div>
                </div>
                <form action="" class="form-container__form">
                    <label for="formName" class="form-container__label">
                        Имя
                    </label>
                    <input type="text" class="form-container__input" id="formName" placeholder="Иван">
                    <label for="formPhone" class="form-container__label">
                        Телефон
                    </label>
                    <input type="text" class="form-container__input" id="formPhone" placeholder="+7 (000) 000-00-00">
                    <button type="submit" class="form-container__button">Отправить</button>
                </form>
            </div>

        </div>
    </div>
    <div class="subs-section">
        <div class="section-header">Найдите квартиру быстрее</div>
        <div class="container container--horizontal">
            <div class="sub-card">
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
                        <div class="sub-card__item-content">Все актуальные объявления со всех доступных источников
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
                        <div class="sub-card__item-content">Все актуальные объявления со всех доступных источников
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

</main>
<?php get_footer()?>