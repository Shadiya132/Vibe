class Post < ApplicationRecord
    has_many :user_posts
    has_many :users, through: :user_posts

    validates :post, length: {maximum: 200}
end
