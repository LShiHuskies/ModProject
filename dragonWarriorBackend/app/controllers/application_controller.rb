class ApplicationController < ActionController::API

  def secret_key
    'secret key'
  end


  def authorization_token
    request.headers["Authorization"]
  end

  def decoded_token
    JWT.decode authorization_token(), secret_key(), true
  end


end
