window.map = (function (window, $) {
  'use strict';

  var dirname = '';

  var mapElem = document.querySelector('#contact-map');

  if (!mapElem) {
    return;
  }

  mapElem.classList.remove('.contact__map--no-js');

  ymaps.ready(function () {
    var map = new ymaps.Map(mapElem, {
      center: [53.273422, 34.316811],
      zoom: 16,
      controls: []
    });

    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new ymaps.Placemark([53.273422, 34.316811], {
      hintContent: "ул. Объездная, 32 (ТРЦ “Аэро Парк”, вход №6)"
    }, {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/icon-map-pin-with-icon.svg',
      iconImageSize: [48, 52],
      iconImageOffset: [-24, -52]
    });

    map.geoObjects.add(myPlacemark);
  });
})(window, jQuery);
