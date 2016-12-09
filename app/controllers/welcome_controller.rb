class WelcomeController < ApplicationController
  def index
    logger.debug "Fuck all tests"
    render layout: false
  end
  def fuck
    logger.debug "test fuck"
    render html: "test".html_safe

  end
end
