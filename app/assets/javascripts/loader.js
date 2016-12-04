function loaderPositionCenter() {
  $('.loader img').css({
    left: ($(window).width() / 2 - $('.loader img').width() / 2) + 'px',
    top: ($(window).height() / 2- $('.loader img').height() / 2) + 'px'
  });
}

function showAndHideAjaxOrLoading() {
  $(window).load(function() {
    // Animate loader off screen
    $('.loader').fadeOut("slow");
  });

  $(document).on('turbolinks:load', function () {
    $('.loader').fadeOut("slow");
  });

  $(document).on('page:load', function () {
    $('.loader').fadeOut("slow");
  });

  $(document).ajaxStart(function(){
    $('.loader').show();
  });

  $(document).ajaxStop(function(){
    $('.loader').fadeOut("slow");
  });
}

function loaderInit() {
  $(document).ready(function () {
    loaderPositionCenter();
    showAndHideAjaxOrLoading();
  })
}