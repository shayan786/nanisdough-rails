function rotateImages () {
  const IMAGE_COUNT = 13;
  const TIMER = 5000;
  var i = 2;

  setInterval(function() { 
    if (i === IMAGE_COUNT) {
      i = 1;
    };
    var previous = i === 1 ? IMAGE_COUNT : i - 1;

    if ($(window).width() < 768) {
      $('.image-slider__image_'+previous).fadeOut('fast', function () {
        $('.image-slider__image_'+i).fadeIn();
      })
    }
    else {
      $('.image-slider__image_'+previous).fadeOut('fast', function () {
        $('.image-slider__image_'+i).fadeIn();
      })
    }

    i++;
  }, TIMER);
}