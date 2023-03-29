class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index, :destroy, :update]


    def index 
        render json: Post.all, status: :ok
    end

    def show
        post = find_post
        render json: post, status: :ok
    end

    def update
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        creator_post = UserPost.create!(creator_post_params(post))
        render json: creator_post, status: :created
    end


    def destroy
        post = find_post
        post.destroy!
        head :no_content
    end

    private

    def post_params
        params.permit(:post, :likes, :poster_id)
    end

    def creator_post_params(post)
        params.permit(:user_id, :post_id).with_defaults(user_id: session[:user_id], post_id: post.id)
    end
    
    def find_post
        Post.find(params[:id])
    end

end
