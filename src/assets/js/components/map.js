if (document.getElementById('map')) {
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [52.251308, 104.267689],
            zoom: 16
        });
        var myPlacemark = new ymaps.Placemark([52.251308, 104.267689], {
            balloonContentHeader: 'Лермонтова, 253',
            balloonContentBody: `+7 (3952) 48‒66‒80`,
        }, {
            iconLayout: 'default#image',
            iconImageHref: './assets/images/content/Logo_Simple_Better.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -22]
        });

        myMap.geoObjects.add(myPlacemark);
    }
}