<h1>Релизные функции на версии 1.0.1</h1>

<ul>
<li>Полная стилизация страниц Личного Кабинета, Сообщений, Подписки</li>
<li>Понятное наименование компонентов, создание структуры папок в теме</li>
<li>Более доработанная версия собственного плагина личного кабинета</li>
</ul>

<h1>Релизные функции на версии 1.0.0</h1>
<ul>
<li>Главная страница работает полностью</li>
<li>Вход Регистрация Выход работают отлично</li>
<li>Профиль отображает текущую информацию</li>
<li>Чат между двумя пользователями работает успешно</li>
</ul>

<h1>Что осталось для версии 1.1.0</h1>
<ul>
<li>Редизайн чата</li>
<li>Донастройка профиля, чтобы slugи нормально отрабатывали</li>
<li>Доделать настройку предпочтений для интеграции с главным профилем</li>
<li>Настроить интеграцию с Базой Данных БР</li>
<li>Сделать страницу отображения объвлений для пользователя с учетом предпочтений</li>
<li>Доделать мобильную версию для всех страниц с учетом изменений</li>
<li>Unit тестирование для каждой части страниц и функционала</li>
</ul>

<h1>Основная сборка</h1>
<p>для запуска необходимо установить node.js не ниже 12.16.3</p>
<p>
<ul>
Команды для запуска:
<li>
npm install - установка модулей
</li>
<li>
npm start - запуск сборки
</li>
</ul>
</p>
<p>Готовые файлы собираются в папку build</p>
<h2>
Структура папок в src:
<h2>
<p>
assets - все вспомогательные файлы

    - fonts - файлы шрифтов
    - images - картинки
      - content - Картинки в коде

js - скрипты

      - components - Вся кодовая база проекта
        - Модули проекта
      - plugins - подключаемые плагины
      - separate - скрипты, которые должны остаться отдельными файлами после компиляции
        - jquery.min.js

styles - стили

      - tools - инструменты (анимации, переменные, миксины)
      - vendors - включения (шрифты, normalize, reset)
      - settings - базовые настройки
      - layout - размещение стилей (контейнеры, строки, сетки)
        style.scss - тут подключаются все папки в прописанном порядке

html

- папки с повторяющимися блоками
- сами страницы

php - папка создается для создания php-файлов в процессе настройки панели администрирования

- папки с повторяющимися блоками
- сами страницы
</p>

