Rails.application.routes.draw do
  # mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, :controllers => {:omniauth_callbacks => "omniauth_callbacks"}

  devise_scope :user do
    get 'sign_in', :to => 'devise/sessions#new', :as => :new_user_session
    get 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  end

  root 'application#index'

  get '/menu'       =>  'application#menu'
  get '/location'   =>  'application#location'

  get '/contact'    =>  'application#contact'
  post '/contact'   =>  'application#contact_email'

  get '/about'      =>  'application#about'

  # 404s
  match "/404", :to => "errors#not_found", :via => :all
  match "/500", :to => "errors#internal_server_error", :via => :all

  # Orders
  # get '/order'      =>  'orders#new'
  # resources :orders
end
