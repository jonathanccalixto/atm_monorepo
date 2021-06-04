class ApplicationController < ActionController::API
  include Authenticable

  private

  def response_render_with(payload: {}, messages: [], status: :ok)
    response_body = deep_transform_keys(payload: payload, messages: messages)

    render json: response_body, status: status
  end

  def deep_transform_keys(data)
    data.deep_transform_keys { |key| key.to_s.camelcase(:lower) }
  end
end
