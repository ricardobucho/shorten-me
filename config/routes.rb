Rails.application.routes.draw do
  root 'shortner#index'

  get '/:token', to: 'shortner#redirect'

  namespace :api do
    namespace :v1 do
      resources :links, only: [:index, :create]
    end
  end
end
