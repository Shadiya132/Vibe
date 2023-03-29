class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :username, :password_digest, :age

  has_many :posts, through: :user_posts
end
