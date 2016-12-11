class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  logger.debug "test appliction once"
  APPID = 'wxfac68d0e2faf11ab'
  APPSCREAT = '235dc06dcfd6bb0e671651c46af169c3'
end
