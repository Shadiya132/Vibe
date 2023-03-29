class User < ApplicationRecord
    has_secure_password
    has_many :user_posts
    has_many :posts, through: :user_posts

    #validations
    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    VALID_EMAIL_REGEX= /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i
    validates :email , presence: true, uniqueness:{case_sensetive:false},
    format:{with:VALID_EMAIL_REGEX,multiline:true}
    validates :password, presence: true, length: { in: 5..20 }
end
