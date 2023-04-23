class Post < ApplicationRecord
    has_many :user_posts
    has_many :users, through: :user_posts


    validates :post, :poster_id, presence: true
    validates :post, length: { in: 2..200}
end
