Rails.application.routes.draw do
  resources :comments, only: []
  resources :posts, only: [:index, :show, :create, :destroy, :update]
  resources :user_posts, only: [:show, :create, :destroy, :index]
  resources :users, except: [:new, :edit]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  post "/signup", to: 'users#create'
  get '/me', to: "users#show"
  get '/profile', to: "users#show"

  get '/posts/:post_id/comments', to: 'comments#show_all'
  post '/posts/:post_id/comments', to: 'comments#create'
  delete '/posts/:post_id/comments/:id', to: 'posts#destroy'
  patch '/posts/:post_id/comments/:id', to: 'posts#update'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
