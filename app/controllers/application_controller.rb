class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  logger.debug "appliction run once"
  WxPlatform.new
end
