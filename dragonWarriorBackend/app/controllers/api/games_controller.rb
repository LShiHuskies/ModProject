class Api::GamesController < ApplicationController

  def index

    token = request.headers["Authorization"]

    begin
      decoded_token = decoded_token()
      render json: Game.all
    rescue
      # JWT::DecodeError
      render json: {
        message: 'INFO ENTERED IS WRONG!!!'
      }, status: :unauthorized
    end

  end

  def create
    @game = Game.new

    @game.scores = params[:scores]

    if @game.save
      render json: {
        scores: @game.scores,
        id: @game.id
    }
    else
      render json: {
        errors: @game.errors.full_messages
      }, status: :unprocessable_entity
    end

  end


  def show
    @game = Game.find_by(id: params[:id])

    begin

      if (decoded_token())
        render json: @game
      end

    rescue JWT::DecodeError
      render json: {
        message: 'INFO ENTERED IS WRONG!!!'
      }, status: :unauthorized
    end

  end



end


# class Api::GamesController < ApplicationController
#
#   before_action :requires_login, only: [:index]
#
#
#
#   def index
#
#     # token = request.headers["Authorization"]
#
#     # authenticate(Game.all)
#
#     # if !valid_token?
#     #   render json: {
#     #     message: 'INFO ENTERED IS WRONG!!!'
#     #   }, status: :unauthorized
#     # else
#     #   render json: Game.all
#     # end
#     #
#     # requires_login()
#     render json: Game.all
#
#   end
#
#   def create
#     @game = Game.new
#
#     @game.scores = params[:scores]
#
#     if @game.save
#       render json: {
#         scores: @game.scores,
#         id: @game.id
#     }
#     else
#       render json: {
#         errors: @game.errors.full_messages
#       }, status: :unprocessable_entity
#     end
#
#   end
#
#
#   def show
#     @game = Game.find_by(id: params[:id])
#
#     render json: @game
#
#   end
#
#
#
# end
