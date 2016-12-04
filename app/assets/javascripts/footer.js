function toggleHoursModal () {
  $('.mobile__hours').click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    showModal('hours');
  })
}

function animateFooterOnScroll () {
  const LIMIT = 20;
  var small = false;

  $(window).scroll(function () {
    if ($(this).scrollTop() <= LIMIT && small) {
      $('footer.main').animate({
        padding: '1.6em 0'
      })

      small = false;
    }
    if ($(this).scrollTop() > LIMIT && !small) {
      $('footer.main').animate({
        padding: '0.6em 0'
      })

      small = true;
    }
  })
} 

function footerInit() {
  $(document).ready(function () {
    toggleHoursModal();
    animateFooterOnScroll();
  })
}