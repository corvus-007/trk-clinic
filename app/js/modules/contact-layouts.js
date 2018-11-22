window.contactLayouts = (function (window, $) {
  'use strict';

  var contactLayouts = document.querySelector('.contact-layouts');

  if (!contactLayouts) {
    return;
  }

  var layoutToggleList = contactLayouts.querySelectorAll('.contact-layouts__toggle');
  var layoutItemsList = contactLayouts.querySelectorAll('.contact-layouts__item');

  contactLayouts.addEventListener('click', function (evt) {
    var target = evt.target;
    var toggleEl = target.closest('.contact-layouts__toggle');

    if (toggleEl) {
      evt.preventDefault();
      var targetLayout = toggleEl.dataset.bindLayout;
      var itemEl = contactLayouts.querySelector('[data-contact-layout="' + targetLayout + '"]');
      layoutToggleList.forEach(function (toggleEl) {
        toggleEl.disabled = false;
      });
      layoutItemsList.forEach(function (itemEl) {
        itemEl.classList.remove('contact-layouts__item--active');
      });

      toggleEl.disabled = true;
      itemEl.classList.add('contact-layouts__item--active');
    }
  });
})(window, jQuery);
