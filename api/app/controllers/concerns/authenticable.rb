module Authenticable
  extend ActiveSupport::Concern

  included do
    attr_accessor :current_account_id

    before_action :authenticate_account!
  end

  private

  def authenticate_account!
    authorization = request.headers['Authorization']

    return unless private_page

    if authorization.blank?
      response_render_with messages: ["Authorization token can't be blank"], status: :unauthorized
      return
    end

    bearer, token = authorization.split ' '

    if bearer != 'Bearer'
      response_render_with messages: ['Authorization token invalid'], status: :unauthorized
      return
    end

    self.current_account_id = TokenCoder.decode token.to_s

    unless current_account
      response_render_with messages: ['Authorization token invalid'], status: :unauthorized
    end
  end

  def current_account
    @current_account ||= Account.find_by(id: current_account_id)
  end

  def private_page
    !params[:controller].in? %w(registrations sessions)
  end
end