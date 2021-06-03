Rails.application.routes.draw do
  post 'sign_up' => 'registrations#create'
end
