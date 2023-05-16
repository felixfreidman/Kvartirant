<?php /* Template Name: Prefs Page */?>
<?php get_header()?>
<?php    get_currentuserinfo(); ?>
<form method="POST" id="prefsForm" class="main main-prefs"
    action="<?php echo get_template_directory_uri() . '/handler/prefs-handler.php'?>">
    <div class="pref-slide pref-slide--1">
        <div class="container container--vertical">
            <div class="pref-slide__header pref-slide__header--middle">Расскажите нам о <br>
                ваших предпочтениях</div>
            <div class="pref-slide__button">Начнём</div>
        </div>
    </div>
    <div class="pref-slide pref-slide--2 js--hidden">
        <div class="container container--vertical">
            <div class="pref-slide__header pref-slide__header--big">Настройка предпочтений</div>
            <div class="pref-slide__header pref-slide__header--middle">Общие параметры</div>
            <div class="pref-slide__header pref-slide__header--small">Сколько комнат?</div>
            <div class="container container--horizontal">
                <div
                    class="pref-slide__checkbox custom-checkbox roomCheckbox resetCheckboxRoom custom-checkbox--active">
                    1</div>
                <div class="pref-slide__checkbox custom-checkbox roomCheckbox">2</div>
                <div class="pref-slide__checkbox custom-checkbox roomCheckbox">3</div>
                <div class="pref-slide__checkbox custom-checkbox roomCheckbox">4</div>
                <div class="pref-slide__checkbox custom-checkbox roomCheckbox">4+</div>
            </div>
            <div class="pref-slide__header pref-slide__header--small">Ваш бюджет</div>
            <div class="container container--horizontal future-vertical">
                <input type="text" name="userBudget" class="pref-slide__input" value="50000" id="userBudgetInput">
                <div id="userBudget" class="pref-slide__slider"></div>
            </div>
            <div class="pref-slide__header pref-slide__header--small">Где будем искать?</div>
            <div class="container container--horizontal">
                <div class="pref-slide__select" id="customSelect">Все районы</div>
                <div class="pref-slide__select-container js--hidden">
                    <div class="pref-slide__option pref-slide__option--active" data-value="Все районы">Все районы
                    </div>
                    <div class="pref-slide__option" data-value="Ленинский">Ленинский</div>
                    <div class="pref-slide__option" data-value="Октябрьский">Октябрьский</div>
                    <div class="pref-slide__option" data-value="Сверловский">Свердловский</div>
                    <div class="pref-slide__option" data-value="Правобережный">Правобережный</div>
                </div>
            </div>
            <div class="pref-slide__button">Продолжить</div>
        </div>
    </div>
    <div class="pref-slide pref-slide--3 js--hidden">
        <div class="container container--vertical">
            <div class="pref-slide__header pref-slide__header--big">Настройка предпочтений</div>
            <div class="pref-slide__header pref-slide__header--middle">Особенности</div>
            <div class="pref-slide__header pref-slide__header--small">Ремонт</div>
            <div class="container container--horizontal future-vertical">
                <div class="pref-slide__checkbox-complex custom-checkbox repairCheckbox" data-value="Не бабушкин">Не
                    бабушкин</div>
                <div class="pref-slide__checkbox-complex custom-checkbox repairCheckbox" data-value="Косметический">
                    Косметический
                </div>
                <div class="pref-slide__checkbox-complex custom-checkbox repairCheckbox" data-value="Дизайнерский">
                    Дизайнерский
                </div>
                <div class="pref-slide__checkbox-complex custom-checkbox repairCheckbox custom-checkbox--active resetCheckboxRepair"
                    data-value="Не важно">
                    Не важно
                </div>
            </div>
            <div class="pref-slide__header pref-slide__header--small">Животные</div>
            <div class="container container--horizontal future-vertical">
                <div class="pref-slide__checkbox-complex custom-checkbox coliverCheckbox" data-value="Собака">Собака
                </div>
                <div class="pref-slide__checkbox-complex custom-checkbox coliverCheckbox" data-value="Кот">Кот</div>
                <div class="pref-slide__checkbox-complex custom-checkbox coliverCheckbox" data-value="Другие">Другие
                </div>
                <div class="pref-slide__checkbox-complex custom-checkbox coliverCheckbox custom-checkbox--active resetCheckboxColiver"
                    data-value="Не важно">
                    Не важно</div>
            </div>
            <div class="pref-slide__button submitForm">Продолжить</div>
        </div>
    </div>
    <input type="text" name="currentUserID" value="<?php echo get_current_user_id() ?>">
    <input type="text" name="roomsAmount" id="roomsAmount" value="" />
    <input type="text" name="budgetAmount" id="budgetAmount" value="" />
    <input type="text" name="areaSearch" id="areaSearch" value="" />
    <input type="text" name="repairPrefs" id="repairPrefs" value="" />
    <input type="text" name="coliverPrefs" id="coliverPrefs" value="" />
</form>
<script src="<?php echo get_template_directory_uri() . '/assets/js/jquery.min.js' ?>">
</script>

<?php get_footer()?>