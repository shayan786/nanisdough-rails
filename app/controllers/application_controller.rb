class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @status = get_store_status
  end

  def menu
    @status = get_store_status
    @doughnuts = Doughnut.all.order('name ASC')
  end

  def location
    @status = get_store_status
  end

  def contact
    @status = get_store_status
  end

  def contact_email
    NanisdoughMailer.send_contact_email(params[:contact]).deliver

    redirect_to '/contact', flash[:notice] => "Your Has Been Sent! We'll Get Back To You Shortly."
  end

  
  private

  def get_store_status
    now = DateTime.now.in_time_zone('Eastern Time (US & Canada)')
    status = 'CLOSED'

    # M-F 8a-6p, Sa-Su 8a-4p
    case now.wday
    when 1..5
      if now.hour >= 8 and now.hour < 18
        status = 'OPEN'
      end
    when 6..7
      if now.hour >= 8 and now.hour < 16
        status = 'OPEN'
      end
    end

    return status
  end
  
end
