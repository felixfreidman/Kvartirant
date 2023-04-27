<?php /* Template Name: Main Page */?>
<?php get_header()?>


<main class="main">
    <div class="section section--greeting" id="toGreeting">
        <div class="greeting-container">
            <?php the_content()?>
            <div class="apply-btn apply-btn--demo">ПОЛУЧИТЬ ДЕМО-ДОСТУП</div>
        </div>
        <div class="mobile-image"> <img
                src="<?php echo get_template_directory_uri() . '/assets/images/content/main.png' ?>" alt=""></div>
    </div>
    <div class="section section--benefits" id="toBenefits">
        <div class="section-header">Выгода от внедрения</div>
        <div class="section-container">
            <div class="image-pagination">

                <?php
if (have_rows('card_repeater')):
    while (have_rows('card_repeater')): the_row();
        ?>

                <div
                    class="image-toggler<?php if (get_sub_field('card_active') == 'yes') {echo ' image-toggler--active';}?>">
                    <div class="image-toggler__container">
                        <div class="image-header"><?php the_sub_field('card_header');?></div>
                        <div class="image-content"><?php the_sub_field('card_content');?></div>
                    </div>
                    <div class="image-toggler__icon"> <img class="image-icon"
                            src="<?php the_sub_field('card_image');?>">
                    </div>
                </div>
                <?php
    endwhile;
endif;
?>
            </div>
            <div class="image-presentation">
                <div class="image--toggle1 image-toggle--show"> <img
                        src="<?php echo get_template_directory_uri() . '/assets/images/content/main_screens.png' ?>"
                        alt="Toggle 3"></div>
            </div>
        </div>
    </div>
    <div class="section section--process" id="toProcess">
        <div class="section-header">Как устроенна Кукушка?</div>
        <div class="section-container">
            <div class="section-list" id="sectionList">
                <div class="list-item" id="firstListPoint">
                    <div class="item-counter">1</div>
                    <div class="item-value">Профиль сотрудника</div>
                </div>
                <div class="list-item" id="secondListPoint">
                    <div class="item-counter">2</div>
                    <div class="item-value">Заступление на объект</div>
                </div>
                <div class="list-item" id="thirdListPoint">
                    <div class="item-counter">3</div>
                    <div class="item-value">Авторизация на объекте</div>
                </div>
                <div class="list-item" id="fourthListPoint">
                    <div class="item-counter">4</div>
                    <div class="item-value">Проверка во время смены</div>
                </div>
                <div class="list-item" id="fifthListPoint">
                    <div class="item-counter">5</div>
                    <div class="item-value">Мониторинг объекта</div>
                </div>
            </div>
            <div class="section-menu" id="sectionMenu">
                <div class="menu-item">
                    <div class="menu-item__header-container" id="firstMenuPoint">
                        <div class="menu-item__counter">1</div>
                        <div class="menu-item__header">Профиль сотрудника</div>
                    </div>
                    <div class="menu-item__subheader">Каждый сотрудник имеет личный ID для идентификации в Системе</div>
                    <div class="menu-item__image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main__menu1.png' ?>"
                            alt=""></div>
                </div>
                <div class="menu-item">
                    <div class="menu-item__header-container" id="secondMenuPoint">
                        <div class="menu-item__counter">2</div>
                        <div class="menu-item__header">Заступление на объект</div>
                    </div>
                    <div class="menu-item__subheader">Сотрудник приходит на объект для начала рабочей смены </div>
                    <div class="menu-item__image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main__menu2.png' ?>"
                            alt=""></div>
                </div>
                <div class="menu-item">
                    <div class="menu-item__header-container" id="thirdMenuPoint">
                        <div class="menu-item__counter">3</div>
                        <div class="menu-item__header">Авторизация на объекте</div>
                    </div>
                    <div class="menu-item__subheader">Сотрудник звонит на единый номер Кукушки с номера телефона объекта
                        и вводит свой ID для заступления на смену</div>
                    <div class="menu-item__image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main__menu3.png' ?>"
                            alt=""></div>
                </div>
                <div class="menu-item">
                    <div class="menu-item__header-container" id="fourthMenuPoint">
                        <div class="menu-item__counter">4</div>
                        <div class="menu-item__header">Проверка во время смены</div>
                    </div>
                    <div class="menu-item__subheader">Во время смены сотрудника Кукушка периодически звонит на номер
                        телефона объекта и проверяет сотрудника: задает ему различные вопросы, записывает голос, ведет
                        диалог. Все данные записываются в Системе</div>
                    <div class="menu-item__image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main__menu4.png' ?>"
                            alt=""></div>
                </div>
                <div class="menu-item">
                    <div class="menu-item__header-container" id="fifthMenuPoint">
                        <div class="menu-item__counter">5</div>
                        <div class="menu-item__header">Мониторинг объекта</div>
                    </div>
                    <div class="menu-item__subheader">Менеджеры видят состояние объектов и знают, как работают
                        сотрудники и не дергают их. По окончании смены сотрудник звонит на единый номер с номера
                        телефона объекта и вводит свой ID</div>
                    <div class="menu-item__image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main__menu5.png' ?>"
                            alt=""></div>
                </div>
            </div>
        </div>
    </div>
    <div class="section section--ability" id="toAbilities">
        <div class="section-header">Что умеет Кукушка?</div>
        <div class="section-container">
            <div class="ability-row">
                <div class="ability-card">
                    <div class="ability-image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main_ability1.svg' ?>"
                            alt=""></div>
                    <div class="ability-header">Контроль присутствия сотрудников на объекте</div>
                    <div class="ability-description">Система проверяет охранников с помощью звонков и сверяет введенный
                        ID</div>
                </div>
                <div class="ability-card">
                    <div class="ability-image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main_ability2.svg' ?>"
                            alt=""></div>
                    <div class="ability-header">Расчет заработной платы сотрудников</div>
                    <div class="ability-description">В Систему загружаются почасовые ставки объектов, производится
                        расчет рабочих часов сотрудников и высчитывается зарплата сотрудников</div>
                </div>
                <div class="ability-card">
                    <div class="ability-image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main_ability3.svg' ?>"
                            alt=""></div>
                    <div class="ability-header">Моментально оповещает руководство о происшествии</div>
                    <div class="ability-description">При экстренных ситуациях (нет ответа на звонок / введен SOS-код /
                        неявка на объект и др.) менеджеры Системы получают оповещения для оперативного решения</div>
                </div>
            </div>
            <div class="ability-row">
                <div class="ability-card">
                    <div class="ability-image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main_ability4.svg' ?>"
                            alt=""></div>
                    <div class="ability-header">Рейтинг сотрудников</div>
                    <div class="ability-description">Для каждого сотрудника Система рассчитывает рейтинг в соответствии
                        с качеством выполнения работ. Распределение премий привязывается к рейтингу сотрудников</div>
                </div>
                <div class="ability-card">
                    <div class="ability-image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main_ability5.svg' ?>"
                            alt=""></div>
                    <div class="ability-header">Система штрафов</div>
                    <div class="ability-description">Для каждого сотрудника Система определяет время опозданий, прогулы,
                        непройденные проверки и вычитает сумму штрафов из зарплаты сотрудников</div>
                </div>
                <div class="ability-card">
                    <div class="ability-image"><img
                            src="<?php echo get_template_directory_uri() . '/assets/images/content/main_ability6.svg' ?>"
                            alt=""></div>
                    <div class="ability-header">Ежедневный отчет руководству</div>
                    <div class="ability-description">Система формирует ежедневный отчет о состоянии объектов и
                        отправляет его на почту высшему руководству</div>
                </div>
            </div>
        </div>
    </div>
    <div class="section section--help" id="toHelp">
        <div class="section-header">Часто задаваемые вопросы</div>
        <div class="section-container">
            <div class="faq-container">

                <?php
if (have_rows('faq_repeater')):

    while (have_rows('faq_repeater')): the_row();?>

                <?php
        $faq_question = get_sub_field('faq_question');
        $faq_answer = get_sub_field('faq_answer');
        ?>
                <div class="faq-block">
                    <div class="question-block">
                        <div class="question-header"><?=$faq_question?></div>
                        <div class="question-indicator"></div>
                    </div>
                    <div class="answer-block"><?=$faq_answer?></div>
                </div>
                <?php
    endwhile;
endif;
?>
            </div>
            <div class="faq-image apply-image">
                <div class="faq-image__header">Контролируйте свои объекты</div>
                <div class="faq-image__subheader">Начните автоматизацию прямо сейчас. Оставьте заявку и получите
                    бесплатный демо-доступ к Кукушке</div>
                <div class="apply-btn apply-btn--faq">ПОЛУЧИТЬ ДЕМО-ДОСТУП</div>
            </div>
        </div>
    </div>
</main>

<?php get_footer()?>