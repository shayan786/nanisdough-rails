# Load the Rails application.
require_relative 'application'

ActionMailer::Base.delivery_method = :smtp

if Rails.env.production?
  ActionMailer::Base.smtp_settings = {
    :user_name      => ENV['SENDGRID_USERNAME'],
    :password       => ENV['SENDGRID_PASSWORD'],
    :domain         => 'nanisdough.com',
    :address        => 'smtp.sendgrid.net',
    :port           => 587,
    :authentication => :plain,
    :enable_starttls_auto => true
  }
end

# Initialize the Rails application.
Rails.application.initialize!
