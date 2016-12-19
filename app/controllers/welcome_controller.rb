class WelcomeController < ApplicationController

  APPID = 'wxfac68d0e2faf11ab'
  APPSCREAT = '235dc06dcfd6bb0e671651c46af169c3'

  def index
    p "get the index page from welcomeController"
    render layout: false
  end
  def web_openid
    if params[:code].empty?
      render html: "test".html_safe
    else
      uri = URI("https://api.weixin.qq.com/sns/oauth2/access_token?appid=#{APPID}&secret=#{APPSCREAT}&code=#{params[:code]}&grant_type=authorization_code")
      # todo put a new history instead client a ajax request
      res = JSON.parse Net::HTTP.get(uri)
      p WxPlatform.user res['openid']
      render json: res
    end
  end
  def code
    render layout: false
  end
end
