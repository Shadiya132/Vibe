class PostSerializer < ActiveModel::Serializer
  attributes :id, :post, :image, :likes, :poster_id

  has_many :users, through: :user_posts
end
