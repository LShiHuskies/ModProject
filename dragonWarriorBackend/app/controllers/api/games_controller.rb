class Api::GamesController < ApplicationController

  def index
    render json: Game.all
  end

  def create
    @game = Game.new

    @game.score = params[:score]

    if @game.save
      render json: {
        score: @game.score,
    }
    else
      render json: {
        errors: @game.errors.full_messages
      }, status: :unprocessable_entity
    end

  end



end
