function newPaymentForm(applicationId) {
  return new SqPaymentForm({
    applicationId: applicationId, // <-- Add your application ID here
    inputClass: 'sq-input',
    inputStyles: [
      {
        fontSize: '12px',
        padding: '8px 6px'
      }
    ],
    cardNumber: {
      elementId: 'sq-card-number',
      placeholder: '•••• •••• •••• ••••'
    },
    cvv: {
      elementId: 'sq-cvv',
      placeholder: 'CVV'
    },
    expirationDate: {
      elementId: 'sq-expiration-date',
      placeholder: 'MM/YY'
    },
    postalCode: {
      elementId: 'sq-postal-code',
      placeholder: '12345'
    },
    callbacks: {
      cardNonceResponseReceived: function(errors, nonce, cardData) {
        if (errors) {
          const messages = errors.map(function (e) {
            return e.message;
          });

          alert(messages.join('\n'));

        } else {
          // Get User info
          const name = $('.orders-new__payment_square-form #name').val();
          const email = $('.orders-new__payment_square-form #email').val();

          order.name = name;
          order.email = email;
          order.nonce = nonce;
          order.cardData = cardData;

          // handle nonce
          $.ajax({
            dataType: 'text',
            method: 'POST',
            url: '/orders',
            data: {
              order: order
            },
            success: function () {
              orderSuccessAnimation()
            },
            failure: function () {
              orderFailureAnimation()
            }
          })
        }
      },
      unsupportedBrowserDetected: function() {
        // Alert the buyer that their browser is not supported
      },
      inputEventReceived: function(inputEvent) {
        switch (inputEvent.eventType) {
          case 'focusClassAdded':
            // Handle as desired
            break;
          case 'focusClassRemoved':
            // Handle as desired
            break;
          case 'errorClassAdded':
            // Handle as desired
            break;
          case 'errorClassRemoved':
            // Handle as desired
            break;
          case 'cardBrandChanged':
            // Handle as desired
            break;
          case 'postalCodeChanged':
            // Handle as desired
            break;
        }
      }
    }
  });
}