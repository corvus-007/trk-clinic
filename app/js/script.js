document.addEventListener('DOMContentLoaded', function () {
  svg4everybody();

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });

  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0) {
      document.body.classList.add('is-navbar-sticky');
    } else {
      document.body.classList.remove('is-navbar-sticky');
    }
  });

  var appSlider = document.querySelector('.app-slider');
  var appSliderTouchId = document.querySelector(
    '.app-slider-mocup-phone__touch-id'
  );

  if (appSlider) {
    appSliderTouchId.addEventListener('click', function (event) {
      event.preventDefault();
      $(appSlider).slick('slickNext');
    });
  }

  $(appSlider).slick({
    accessibility: false,
    arrows: false,
    speed: 700,
    dots: true,
    autoplay: true,
    appendDots: '.app-slider-controls',
    dotsClass: 'app-slider-controls__list',
    customPaging: function (slider, i) {
      var currentSlide = slider.$slides[i];
      var descriptionSlide = currentSlide.querySelector(
        '.app-slider__description'
      );
      var descriptionSlideText = descriptionSlide.textContent;
      var controlsButton = document.createElement('button');
      controlsButton.classList.add('app-slider-controls__button');
      controlsButton.type = 'button';
      controlsButton.textContent = descriptionSlideText;
      return controlsButton;
    }
  });

  // Welcome slider
  var $welcomeSlider = $('[data-welcome-slider]');

  if ($welcomeSlider.length) {
    var currentSlide;
    var slidesCount;
    var $sliderCounter = $welcomeSlider.find('.welcome-slider__counter');

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $sliderCounter.text(currentSlide + '/' + slidesCount);
    };

    $welcomeSlider.on('init', function (event, slick) {
      updateSliderCounter(slick);
    });

    $welcomeSlider.on('click', '.welcome-slider__control', function (evt) {
      evt.preventDefault();
      var direction = this.dataset.slideAction;
      switch (direction) {
        case 'slide-prev':
          $welcomeSlider.slick('slickPrev');
          break;
        case 'slide-next':
          $welcomeSlider.slick('slickNext');
          break;
      }
    });

    $welcomeSlider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $welcomeSlider.slick({
      accessibility: false,
      speed: 700,
      arrows: false,
      slide: '.welcome-slider__item',
      responsive: [{
        breakpoint: 1024,
        settings: {
          autoplay: true,
        }
      }]
    });
  }

  $('[data-services-persons]').slick({
    accessibility: false,
    speed: 700,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0',
    responsive: [{
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        centerPadding: '5%',
        arrows: false
      }
    }, {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        centerPadding: '25%',
        arrows: false
      }
    }, {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        centerPadding: '15%',
        arrows: false
      }
    }]
  });

  if (window.matchMedia('(min-width: 1024px)').matches) {
    $('.person-profile__photo-wrapper').stick_in_parent({
      offset_top: 110
    });
  }
});
