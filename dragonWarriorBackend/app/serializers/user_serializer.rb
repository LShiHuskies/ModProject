class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :user_games
  has_many :games, through: :user_games
end
