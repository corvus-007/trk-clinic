window.outCover = (function () {
  'use strict';

  var outCover = document.querySelector('.out-cover');
  var outCoverToggle = document.querySelector('.out-cover-toggle');
  var scrollWidth = window.util.getScrollbarWidth();
  var menuItems = outCover.querySelectorAll('.main-nav .current-menu-item');

  menuItems.forEach(function (item) {
    var link = item.querySelector('a');
    var hrefAttr = link.getAttribute('href');
    if (/#section/.test(hrefAttr)) {
      item.classList.remove('current-menu-item');
    }
  });

  var onOutCoverEscPress = function (event) {
    if (event.keyCode === window.util.KEYCODE_ESC) {
      hideOutCover();
    }
  };

  var showOutCover = function () {
    outCover.classList.add('out-cover--opened');
    outCoverToggle.classList.add('out-cover-toggle--fired');
    document.body.classList.add('is-out-cover-opened');
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = scrollWidth + 'px';

    document.addEventListener('keydown', onOutCoverEscPress);
  };

  var hideOutCover = function () {
    outCover.classList.remove('out-cover--opened');
    outCoverToggle.classList.remove('out-cover-toggle--fired');
    document.body.classList.remove('is-out-cover-opened');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';

    document.removeEventListener('keydown', onOutCoverEscPress);
  };


  outCover.addEventListener('click', function (evt) {
    var target = evt.target;
    var isLink = target.matches('.main-nav li a');

    if (isLink) {
      hideOutCover();
    }
  });

  outCoverToggle.addEventListener('click', function (event) {
    event.preventDefault();

    if (!this.classList.contains('out-cover-toggle--fired')) {
      showOutCover();
    } else {
      hideOutCover();
    }
  });

  return {
    show: showOutCover,
    hide: hideOutCover
  };
})();
