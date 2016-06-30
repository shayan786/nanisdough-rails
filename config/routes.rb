Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#index'

  get '/menu'       =>  'application#menu'
  get '/location'   =>  'application#location'

  get '/contact'    =>  'application#contact'
  post '/contact'   =>  'application#contact_email'

  get '/about'      =>  'application#about'
end
