Rails.application.routes.draw do
  root to: 'application#home'

  defaults format: :json do
    resources :questions, only: :index
    resources :answers, only: :create
    resources :concerns, only: :create
  end

  post 'contact' => 'contacts#create'

  match '/401', to: 'errors#unauthorized', via: :all, as: :unauthorized
  match '/404', to: 'errors#not_found', via: :all, as: :not_found
  match '/500', to: 'errors#internal_server_error', via: :all, as: :internal_server_error

  match 'audio/:filename', to: 'application#audio', via: :get
  match '*path', to: 'application#home', via: :get
end
