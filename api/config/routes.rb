Rails.application.routes.draw do
  post 'sign_in' => 'sessions#create'
  post 'sign_up' => 'registrations#create'
end
