class WxPlatform
  APPID = 'wxfac68d0e2faf11ab'
  APPSECRET = '235dc06dcfd6bb0e671651c46af169c3'

  def initialize
    @@expires = Time.now
    @@res = {}
  end

  def self.users
    access_token = get_access_token['access_token']
    uri = URI "https://api.weixin.qq.com/cgi-bin/user/get?access_token=#{access_token}"
    Net::HTTP.get(uri)
    # todo make return object
  end

  def self.user(openid)
    access_token = get_access_token['access_token']
    uri = URI "https://api.weixin.qq.com/cgi-bin/user/info?access_token=#{access_token}&openid=#{openid}&lang=zh_CN"
    Net::HTTP.get(uri)
  end

  def self.get_access_token
    now = Time.now
    if(@@expires > now)
      p "no need freash"
      return @@res
    else
      uri = URI "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=#{APPID}&secret=#{APPSECRET}"
      @@res = JSON.parse  Net::HTTP.get(uri)
      @@expires = (@@expires > now)? @@expires : now + @@res['expires_in'] - 10
      @@res['expires_in'] = @@expires
      p "freashed"
      return @@res
    end
  end

  private_class_method :get_access_token
end