class NanisdoughMailer < ApplicationMailer
  def send_contact_email(contact)
    @contact = contact

    email = {
      to: 'order@nanisdough.com',
      from: contact['email'],
      subject: '[NanisDough] Contact Form'
    }

    mail(email)
  end

  def send_order_email(order)
    @order = order
    to_email = order.user ? order.user.email : order.email
    bcc_email = 'order@nanisdough.com'
    from_email = 'order@nanisdough.com'
    subject = '[NanisDough] Order Confirmation'

    email = {
      to: to_email,
      from: from_email,
      bcc: bcc_email,
      subject: subject
    }

    mail(email)
  end
end
