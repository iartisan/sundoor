class ApiController < ApplicationController
  def users
    @users = WxPlatform.users
    respond_to do |format|
      format.json {render json: @users}
    end
  end
end
