(function () {
  if (typeof ymaps === "undefined") {
    return;
  }
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "ymap",
        {
          center: [55.753544, 37.621202],
          zoom: 16,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        { balloonContent: "г. Москва, Преображенская площадь, 8" },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "/img/common/marker.svg",
          // Размеры метки.
          iconImageSize: [40, 62.2],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-50, -38],
        }
      );
    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable("scrollZoom");
  });
})();
