puts "seeding data..."

# User data
puts "seeding user data!..."
user1 = User.create!(first_name:"Betty", last_name: "White", username: "bettyboop", email: "bwhite123@gmail.com", password:"betty123", age: 18)
user2 = User.create!(first_name:"Lucy", last_name: "Hale", username: "luluhale", email: "halelucy@gmail.com", password:"lulu123", age: 19)
user3 = User.create!(first_name:"Chris" , last_name: "Rock", username: "rockchris", email:"chrisrock@gmaill.com" , password:"chris123", age: 19)
user4 = User.create!(first_name:"Layla", last_name: "Ali", username: "laylayali", email:"laylay123@gmail.com", password:"layla123", age: 21)
user5 = User.create!(first_name:"Eric", last_name: "Smith", username: "esmith", email:"ericsmith@gmail.com" , password:"eric123", age: 22)
puts "user data seeded!"

#Post data
puts "seeding post data..."
post1 = (user_id = User.all.sample.id 
post = Post.create(post: "What a beautiful day!!!!!", likes: 0, poster_id: user_id)
UserPost.create(user_id: user_id, post_id: post.id))
post2 = (user_id = User.all.sample.id 
post = Post.create(post:"Im so bored..... :(", likes: 0, poster_id: user_id)
UserPost.create(user_id: user_id, post_id: post.id))
post3 = (user_id = User.all.sample.id 
post = Post.create(post: "Had a long day ugh", likes: 0, poster_id: user_id)
UserPost.create(user_id: user_id, post_id: post.id))
post4 = (user_id = User.all.sample.id 
post = Post.create(post: "Cant wait for my hair appointment", likes: 0, poster_id: user_id)
UserPost.create(user_id: user_id, post_id: post.id))
post5 = (user_id = User.all.sample.id 
post = Post.create(post: "Anyone watching last of us?????", likes: 0, poster_id: user_id)
UserPost.create(user_id: user_id, post_id: post.id))

#  User_Post data
# UserPost.create!(user_id: user1.id, post_id: post1.id)
# UserPost.create!(user_id: user2.id, post_id: post2.id)
# UserPost.create!(user_id: user3.id, post_id: post4.id)
# UserPost.create!(user_id: user4.id, post_id: post5.id)
# UserPost.create!(user_id: user5.id, post_id: post3.id)
puts "post data seeded!"
