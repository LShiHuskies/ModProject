class Api::UsersController < ApplicationController

    before_action :requires_login, only: [:index, :show, :users_games]
    before_action :is_admin, only: [:index]

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


  def show
    @user = User.find_by(id: params[:id])

    render json: @user

  end

  def users_games
    @user = User.find_by(id: params[:id])

    render @user

  end

end
