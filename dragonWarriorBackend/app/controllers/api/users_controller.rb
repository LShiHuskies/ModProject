class Api::UsersController < ApplicationController

  def index

    token = request.headers["Authorization"]

    begin

      if (decoded_token())
        render json: User.all
      end

    rescue JWT::DecodeError
      render json: {
        message: 'INFO ENTERED IS WRONG!!!'
      }, status: :unauthorized
    end

  end

  def create
    @user = User.new

    @user.username = params[:username]
    @user.password = params[:password]



    if @user.save
      render json: {
        username: @user.username,
        id: @user.id
      }
    else
      render json: {
        errors: @user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end


  def show
    @user = User.find_by(id: params[:id])

    begin

      if (decoded_token())
        render json: @user
      end

    rescue JWT::DecodeError
      render json: {
        message: 'INFO ENTERED IS WRONG!!!'
      }, status: :unauthorized
    end

  end

end
