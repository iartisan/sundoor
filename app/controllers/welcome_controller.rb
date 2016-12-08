class WelcomeController < ApplicationController
  def index
    logger.debug "Fuck all tests"
  end
  def fuck
    logger.debug "test fuck"
    render html: "test".html_safe

  end
end
