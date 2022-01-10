Rails.application.routes.draw do

  resources :foods, only: [:new, :index, :create, :destroy]
  resource :homes, only: [:create], path: '/middle'
  root to: 'homes#top'
  get 'middle' => 'homes#middle'
  get 'turn' => 'homes#turn'
end
