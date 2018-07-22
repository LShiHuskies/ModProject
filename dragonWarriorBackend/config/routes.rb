Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :games
    resources :users
    resources :sessions


    get '/users/:user_id/games', to: 'users#users_games'

  end

end
