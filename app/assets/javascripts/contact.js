function handleFormSubmit() {
  function contactSuccessAnimation() {
    $('.contact form').fadeOut();
    $('.contact__success').delay(500).fadeIn();
  }

  function contactFailureAnimation() {
    $('.contact form').fadeOut();
    $('.contact__failure').delay(500).fadeIn();
  }

  $('.contact form .btn').click(function (e) {
    e.preventDefault();

    const email = $('.contact form input.contact__email').val();
    const message = $('.contact form textarea').val();

    if (email.length === 0 && message.length === 0) { 
      alert('Please complete the form.');
    }
    else {
      const contact = {
        email: email,
        message: message
      }

      $.ajax({
        dataType: 'text',
        method: 'POST',
        url: '/contact',
        data: {
          contact: contact
        },
        success: function () {
          contactSuccessAnimation()
        },
        failure: function () {
          contactFailureAnimation()
        }
      })
    }
  })
}

function contactInit() {
  $(document).ready(function () {
    handleFormSubmit();
  })
}