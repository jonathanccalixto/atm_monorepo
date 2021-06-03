class RegistrationsController < ApplicationController
  def create
    account.attributes = sign_up_params

    if account.save
      messages = ['Account created successfully']
      status = :created
    else
      messages = account.errors.full_messages
      status = :unprocessable_entity
    end

    response_render_with messages: messages, status: status
  end

  private

  def account
    @account ||= Account.new
  end

  def sign_up_params
    params.require(:sign_up).permit(
      :name, :password, :password_confirmation, :agency, :account
    )
  end
end
