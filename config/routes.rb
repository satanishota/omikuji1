Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  resource :homes, only: [:create], path: '/middle'
  root to: 'homes#top'
  get 'middle' => 'homes#middle'
end
