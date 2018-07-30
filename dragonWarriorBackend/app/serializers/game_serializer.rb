class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :scores
  has_many :user_games
  has_many :users, through: :user_games
end
