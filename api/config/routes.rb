Rails.application.routes.draw do
  post 'sign_in' => 'sessions#create'
  post 'sign_up' => 'registrations#create'
  get 'balance' => 'transactions#balance'
  post 'deposit' => 'transactions#deposit'
end
