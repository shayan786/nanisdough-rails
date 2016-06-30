function rotateMenuImages() {
  const images = [
    '/assets/doughnuts/chocolate_ganache_side_1.jpg',
    '/assets/doughnuts/chocolate_ganache_side_2.jpg',
    '/assets/doughnuts/chocolate_ganache_top.jpg'
  ];
  const TIMER = 5000;
  var i = 0;

  $('.menu__item_img').css({
    backgroundImage: 'url('+images[0]+')'
  });

  setInterval(function() {
    if (i === images.length) {
      i = 0;
    }

    $('.menu__item_img').css({
      backgroundImage: 'url('+images[i]+')'
    });

    i++;
  }, TIMER);
}

function menuInit() {
  rotateMenuImages();
}