class SessionsController < ApplicationController
  def create
    sign_in.attributes = signin_params

    if sign_in.authenticated?
      messages = ['Sign in performed successfully']
      payload = { token: sign_in.token }
      status = :created
    else
      messages = sign_in.errors.full_messages
      payload = {}
      status = :unauthorized
    end

    response_render_with payload: payload, messages: messages, status: status
  end

  private

  def sign_in
    @sign_in ||= SignInForm.new
  end

  def signin_params
    params.require(:sign_in).permit(
      :password, :agency, :account
    )
  end
end
