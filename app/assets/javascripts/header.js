function toggleNav () {
  $('nav.main').css({
    display: 'block',
    left: '-'+$(window).width()+'px'
  });

  $('nav.lines').click(function(){
    if ($(this).hasClass('open')) {
      if ($(window).width() > 768) {
        $('header').animate({
          width: '80px'
        })

        $('.logo').fadeOut('fast')
      }

      $('nav.main').animate({
        left: '-'+$(window).width()+'px'
      });

      $('footer.main').css({
        zIndex: '2'
      });

      $('.contact, .about').css({
        zIndex: '0'
      })
    }
    else {
      if ($(window).width() > 768) {
        $('header').animate({
          width: $('nav.main').width()+'px'
        })

        $('.logo').fadeIn('fast').css({
          zIndex: '1'
        })
      }

      $('nav.main').animate({
        left: '0px'
      });

      $('footer.main').css({
        zIndex: '-2'
      });

      $('.contact, .about').css({
        zIndex: '-1'
      })
    }

    $(this).toggleClass('open');

  });
}

function headerInit () {
  $(document).ready(function () {
    toggleNav();
  });
}