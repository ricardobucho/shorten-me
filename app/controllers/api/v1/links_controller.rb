# require 'securerandom'

class Api::V1::LinksController < Api::V1::BaseController
  def index
    render json: Link.all
  end

  def create
    @link = Link.new(link_params)

    @link.url.strip
    @link.token.strip

    if @link.token.blank?
      @link.token = generate_token
    end

    if @link.valid?
      @link.save!
      render json: { model: @link, success: true, full_url: @link.url, short_url: request.base_url + '/' + @link.token }
    else
      render json: { messages: @link.errors.full_messages.first, success: false }
    end
  end

  private

  def generate_token
    # Length of the token is 4/3 of specified n, so 6 should get us 8
    return SecureRandom.urlsafe_base64(6)
  end

  def link_params
    params.require(:link).permit(:id, :url, :token)
  end
end