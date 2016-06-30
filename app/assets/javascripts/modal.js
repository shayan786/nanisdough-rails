function hideModal() {
  $('.modal .close').click(function () {
    $('.modal').fadeOut();
  })
}

function showModal(name) {
  $('.' + name).fadeIn();
}
