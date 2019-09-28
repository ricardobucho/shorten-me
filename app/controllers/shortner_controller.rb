class ShortnerController < ApplicationController
  def index
  end

  def redirect
    @token = params[:token].strip
    @link = Link.where({ token: @token }).first

    if ! @link
      redirect_to root_path
      return
    else
      @link.increment!(:hits)
      redirect_to @link.url
    end
  end
end
