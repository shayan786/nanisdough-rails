function rotateImages () {
  const IMAGE_COUNT = 5;
  const TIMER = 5000;
  var i = 2;

  setInterval(function() { 
    if (i === 5) {
      i = 1;
    };

    $('.image-slider__image').css({
      backgroundImage: 'url(/assets/slider/slider_'+i+'.jpg)'
    });

    i++;
  }, TIMER);
}