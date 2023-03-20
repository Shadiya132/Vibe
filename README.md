Vibe
Vibe is an app where users can meet, share and discuss their thoughts with each other. They can also engage in playing games with other users.

Wireframe
￼

User Stories
AUTH
* A user can signup and create an account.
* A user can login to an account.
* A user can edit their account.
* A user can logout of their account.
* A user can edit their profile details.
MVP CRUD
* A user can view post made by other users. (READ)
* A user can create a post (CREATE)
* A user can delete a post from their profile page. (DELETE)
* A user can like/dislike posts.(UPDATE)
Stretch goals
* A user can post comments from their profile.
* A user can make comments on other existing posts.
* A user can sort/search through previous post.
* A user can chat with other followers.
* A user can create groupchats with mutual followers.
* A user can play games with other followers.

Backend

ERD
￼

Models
- A User has many User_posts, and has many User_Posts through Posts.
- A Post has_many User_Posts, has many Users through User_posts.
- A user_post belongs to User_id and belongs to Post_id.

API Endpoints
￼

Validations
- Validates presence for first_name, last_name, email, username, and password.
- Validates format for email.
- Validates inclusion for age (between 18 and 99).
- Validates length for password (minimum: 6).
- Validates format for email (VALID_EMAIL_REGEX).
- Validates format for password (confirmation: { case_sensitive: false }).
- Validates length for comment [between 1 and 100].
- Validates length for post [between 1 and 200].
- Validates presence for followed_id, follower_id and user_id, in posts and comments.
