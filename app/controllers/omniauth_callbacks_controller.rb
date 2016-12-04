class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in_and_redirect @user #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      
      respond_to do |res|
        # Render some JS with failure alert
      end
    end
  end  

  # For database facebook auth.
  def new_session_path(scope)
    new_order_path
  end

  def after_sign_in_path_for(resource)
    new_order_path || stored_location_for(resource) || root_path
  end

  def failure
    redirect_to root_path
  end
end