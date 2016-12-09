Rails.application.routes.draw do
  resources :visit_histories
  get 'welcome/index'
  get 'welcome/fuck'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
end
