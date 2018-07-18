class Api::UsersController < ApplicationController

  def index
    render json: User.all
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


end
