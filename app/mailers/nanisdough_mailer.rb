class NanisdoughMailer < ApplicationMailer
  def send_contact_email(contact)
    @contact = contact

    email = {
      to: 'order@nanisdough.com',
      from: contact[:email],
      subject: '[NanisDough] Contact Form'
    }

    mail(email)
  end
end
