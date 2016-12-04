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

      $('.contact, .about, .orders-new, .not-found').css({
        zIndex: '0'
      })
    }
    else {
      if ($(window).width() > 768) {
        $('header').animate({
          width: $('nav.main').width()+'px'
        })

        $('.logo').fadeIn('slow').css({
          zIndex: '1'
        })
      }

      $('nav.main').animate({
        left: '0px'
      });

      $('footer.main').css({
        zIndex: '-2'
      });

      $('.contact, .about, .not-found').css({
        zIndex: '-1'
      })

      $('.orders-new').css({
        zIndex: '0'
      })
    }

    $(this).toggleClass('open');

  });
}

function centerLogo() {
  if ($(window).width() > 768) {
    $('.logo').css({
      left: ($('nav.main').width()/2) - ($('.logo').width()/2) + 'px'
    });
  }
  else {
    $('.logo').css({
      left: ($(window).width()/2) - ($('.logo').width()/2) + 'px'
    })
  }
}

function headerInit () {
  $(document).ready(function () {
    toggleNav();
    centerLogo();
  });
}