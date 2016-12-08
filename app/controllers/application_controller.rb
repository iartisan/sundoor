class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  logger.debug "test appliction once"
end
