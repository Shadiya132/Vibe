class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :username, :password_digest, :age
end