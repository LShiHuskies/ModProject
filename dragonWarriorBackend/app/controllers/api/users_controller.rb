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

  def update
    @user = User.find_by(id: params[:id])
    @game = Game.find_by(id: params['game_id'])
    @user.games << @game
    
    render json: @user.games
  end

  def users_games
    @user = User.find_by(id: params[:id])

    render json: @user.games

  end

end
