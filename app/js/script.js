document.addEventListener('DOMContentLoaded', function() {
  svg4everybody();

  var appSlider = document.querySelector('.app-slider');
  var appSliderTouchId = document.querySelector(
    '.app-slider-mocup-phone__touch-id'
  );

  if (appSlider) {
    appSliderTouchId.addEventListener('click', function(event) {
      event.preventDefault();
      $(appSlider).slick('slickNext');
    });
  }

  $(appSlider).slick({
    accessibility: false,
    arrows: false,
    dots: true,
    appendDots: '.app-slider-controls',
    dotsClass: 'app-slider-controls__list',
    customPaging: function(slider, i) {
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

  // Welcome sldier
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
      speed: 800,
      dots: false,
      arrows: false,
      infinite: true,
      slide: '.welcome-slider__item',
      responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }]
    });
  }

});
