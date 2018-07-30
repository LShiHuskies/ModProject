class UserGameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id
  belongs_to :user
  belongs_to :game
end
