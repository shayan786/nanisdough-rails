var order = {
  items: [],
  name: null,
  email: null,
  nonce: null,
  cardData: null,
  type: "Pickup",
  date: null,
  time: null
};

function adjustHeaderLogoSize() {
  $('.logo').css({
    width: '80px'
  })
}

function orderType() {
  $('.orders-new__type_pickup, .orders-new__type_delivery').click(function () {
    $('.orders-new__type_pickup, .orders-new__type_delivery').removeClass('active');
    if (!$(this).hasClass('active')){

      if ($(this).is('.orders-new__type_delivery')) {
        return;

        var delivery = false;

        if (order.items.length > 0) {
          order.items.forEach(function (i) {
            if (i.name === 'delivery') {
              delivery = true;
            }
          })
        }

        if (!delivery) {
          order.items.push({name: 'delivery', cost: 10, count: 1})
          order.type = "Delivery";
          updateCost();
        }
      }
      else {
        if (order.items.length > 0) {
          order.items.forEach(function (i, k) {
            if (i.name === 'delivery') {
              order.items.splice(k, 1);
            }
          })

          order.type = "Pickup";

          updateCost();
        }
      }

      $(this).addClass('active');

      $('.orders-new__dates').fadeIn();
    }
  })
}

function orderDateTime() {
  $('.orders-new__dates_date .btn').click(function () {
    $('.orders-new__dates_date .btn').removeClass('active');

    if (!$(this).hasClass('active')){
      $(this).addClass('active');
      order.date = $(this).data('date');

      $('.orders-new__times').fadeIn();
    }
  })

  $('.orders-new__times_time .btn').click(function () {
    $('.orders-new__times_time .btn').removeClass('active');

    if (!$(this).hasClass('active')){
      $(this).addClass('active');
      order.time = $(this).data('time');

      setTimeout(function () {
        $('.orders-new__type').fadeOut();
        $('.orders-new__dates').fadeOut();
        $('.orders-new__times').fadeOut();

        $('.orders-new__step-1 .fa').fadeIn();
        $('.orders-new__step-2').addClass('active');

        $('.orders-new__items').delay(500).fadeIn();
      }, 1000)
    }
  })
}

function updateItemCount() {
  $('.btn__add').click(function () {
    var current_value = $(this).parent().parent().find('input[type=number]').val()

    if (current_value >= 0) {
      $(this).parent().parent().find('input[type=number]').val(parseInt(current_value) + 1)
    }

    const id = parseInt($(this).data('id'));
    var name = $.trim($(this).parent().parent().find('.name').text());
    var cost = parseFloat($(this).parent().parent().find('.cost .amount').text());

    var exists = false;

    order.items.forEach(function (i) {
      if (i.name === name) {
        exists = true;
        i.count++;
      }
    });

    if (!exists) {
      order.items.push({id: id, name: name, cost: cost, count: 1});
    }

    updateCost();
  })

  $('.btn__remove').click(function () {
    var current_value = $(this).parent().parent().find('input[type=number]').val()

    if (current_value > 0) {
      $(this).parent().parent().find('input[type=number]').val(parseInt(current_value) - 1)
    }

    var name = $.trim($(this).parent().parent().find('.name').text());
    var cost = parseFloat($(this).parent().parent().find('.cost .amount').text());

    if (order.items.length > 0) {
      order.items.forEach(function (i, k) {
        if (i.name === name) {
          i.count--;
        }
      })
      updateCost();
    }
  })
}

function handleItemsNextBtn () {
  $('.btn__items_next').click(function () {
    if (order.items.length === 0) {
      alert("You haven't selected any dough!");
    }
    else {
      $('.orders-new__type').fadeOut();
      $('.orders-new__dates').fadeOut();
      $('.orders-new__times').fadeOut();
      $('.orders-new__items').fadeOut();

      setTimeout(function () {
        generateOrderSummary();
        $('.orders-new__step-2 .fa').fadeIn();
        $('.orders-new__step-3').addClass('active');
        $('.orders-new__payment').fadeIn();
      }, 500)
    }
  })
}

function handleNavigationClicks() {
  function showStep1() {
    $('.orders-new__type').fadeIn();
    $('.orders-new__dates').fadeIn();
    $('.orders-new__times').fadeIn();
  }

  function showStep2() {
    $('.orders-new__items').fadeIn();
  }

  function showStep3() {
    $('.orders-new__payment').fadeIn();
  }

  function hideStep1() {
    $('.orders-new__type').fadeOut();
    $('.orders-new__dates').fadeOut();
    $('.orders-new__times').fadeOut();
  }

  function hideStep2() {
    $('orders-new__items').fadeOut();
  }

  function hideStep3() {
    $('.orders-new__payment').fadeOut();
  }

  $('.orders-new_-step-1').click(function () {
    hideStep2();
    hideStep3();

    setTimeout(function () {
      showStep1();
    }, 500);
  })

  $('.orders-new_-step-2').click(function () {
    hideStep1();
    hideStep3();

    setTimeout(function () {
      showStep2();
    }, 500);
  })

  $('.orders-new_-step-3').click(function () {
    hideStep1();
    hideStep2();

    setTimeout(function () {
      showStep3();
    }, 500);
  })
}

function updateCost() {
  var total_cost = 0;

  if (order.items.length > 0) {
    order.items.forEach(function (i) {
      total_cost += (i.cost * i.count);
    });
  }

  $('.orders-new__cost .amount').text(total_cost.toFixed(2).toString());
  $('.orders-new__form input[name="order[cost]"').val(total_cost.toFixed(2));
}

function generateOrderSummary() {
  var tax = 0;
  var sub_total_cost = 0;
  var total_cost = 0;

  const TAX_RATE = 0.06;

  order.items.forEach(function (i) {
    const item = "<div class='row'> <div class='col-xs-2'>" + i.count + "</div><div class='col-xs-6'>" + i.name + "</div><div class='col-xs-3'>$ " + (i.count * i.cost).toFixed(2) + "</div></div>";

    $('.orders-new__payment_summary').append(item);

    sub_total_cost += (i.count * i.cost);
  })

  tax = (sub_total_cost * TAX_RATE);
  total_cost = sub_total_cost + tax;

  $('.orders-new__payment_summary').append("<div class='row sub_total'> <div class='col-xs-2'></div> <div class='col-xs-6 text-right'> Sub-Total </div> <div class='col-xs-3'>$ " + sub_total_cost.toFixed(2) + "</div></div>");
  $('.orders-new__payment_summary').append("<div class='row'> <div class='col-xs-2'></div> <div class='col-xs-6 text-right'> Tax </div> <div class='col-xs-3'>$ " + tax.toFixed(2) + "</div></div>");
  $('.orders-new__payment_summary').append("<div class='row total_cost'> <div class='col-xs-2'></div> <div class='col-xs-6 text-right'> Total </div> <div class='col-xs-3'>$ " + total_cost.toFixed(2) + "</div></div>");

  const date = new Date(order.date.toString());

  const date_readable = date.getMonth() + 1 + "/" + date.getDate();

  $('.orders-new__payment_summary .sentence').text(order.type + " on " + date_readable + " at " + order.time);
}

function handleSubmitOrderBtn (paymentForm) {
  $('.btn__payment_submit').click(function() {
    // Validation
    if ($('.orders-new__payment_square-form #name').val().length > 0 && $('.orders-new__payment_square-form #email').val().length > 0) {
      // Submit Card for Processing
      paymentForm.requestCardNonce();
    }
    else {
      alert('Form is incomplete!');
    }
  })
}

function handleContinueAsGuestOrContinueBtn () {
  $('.btn__guest, .btn__continue').click(function () {
    if ($(this).is('.btn__continue')) {
      $(this).fadeOut();
    }
    $('.orders-new__signup').fadeOut();
    $('.orders-new__cost').delay(500).fadeIn();
    $('.orders-new__type').delay(500).fadeIn();
    $('.orders-new__dates').delay(500).fadeIn();
  });
}

function orderSuccessAnimation () {
  $('.orders-new__step-3 .fa').fadeIn();
  $('.orders-new__payment_square-form').fadeOut();
  $('.orders-new__success').delay(500).fadeIn();
}

function orderFailureAnimation () {
  $('.orders-new__payment_square-form').fadeOut();
  $('.orders-new__failure').delay(500).fadeIn();
}

function newOrderInit(applicationId) {
  var paymentForm = newPaymentForm(applicationId);

  $(document).ready(function () {
    adjustHeaderLogoSize();
    centerLogo();
    // orderType();
    updateItemCount();
    orderDateTime();
    handleNavigationClicks();
    handleItemsNextBtn();  
    handleContinueAsGuestOrContinueBtn();
    handleSubmitOrderBtn(paymentForm);
  })
}