class AccountSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_name, :password, :first_name, :last_name, :image

  has_many :posts, through: :user_posts
end
