class WelcomeController < ApplicationController
  def index
    logger.debug "Fuck all tests"
    render layout: false
  end
  def web_openid
    if params[:code].empty?
      render html: "test".html_safe
    else
      logger.debug "get code" + params[:code]
      logger.debug "get appid : #{APPID}"
      uri = URI("https://api.weixin.qq.com/sns/oauth2/access_token?appid=#{APPID}&secret=#{APPSCREAT}&code=#{params[:code]}&grant_type=authorization_code")
      # todo put a new history instead client a ajax request
      render json: Net::HTTP.get(uri)
    end
  end
  def code
    render layout: false
  end
end
