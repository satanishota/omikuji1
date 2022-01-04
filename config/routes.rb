Rails.application.routes.draw do
  get 'foods/new'
  get 'foods/index'
  get 'foods/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :foods, only: [:new, :index, :create, :delete]
  resource :homes, only: [:create], path: '/middle'
  root to: 'homes#top'
  get 'middle' => 'homes#middle'
  get 'turn' => 'homes#turn'
end
