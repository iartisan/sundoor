Rails.application.routes.draw do
  get 'api/users'

  get 'visit_histories/by_user', to: 'visit_histories#history_by_user'
  resources :visit_histories
  get 'welcome/index'
  get 'welcome/web_openid'
  get 'welcome/code'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
end
