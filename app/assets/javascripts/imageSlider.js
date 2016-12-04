function rotateImages () {
  const IMAGE_COUNT = 5;
  const TIMER = 5000;
  var i = 2;

  setInterval(function() { 
    if (i === 5) {
      i = 1;
    };
    var previous = i === 1 ? 5 : i - 1;

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