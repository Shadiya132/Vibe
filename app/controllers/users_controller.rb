class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]
    
        def index
            render json: User.all, status: :ok
        end
    
        def create
            user = User.create!(user_params)
            if user.valid?
                render json: user, status: :created
            else
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            end
        end

        def show 
            render json: @current_user, status: :ok
        end

        def destroy
            user = find_user
            user.destroy!
            head :no_content
        end
    
        def update
            user = find_user
            user.update!(user_params)
            render json: user, status: :accepted
        end
    
        private
    
        def find_user
            User.find_by!(id: params[:id])
        end
        
        def user_params
            params.permit(:username, :password, :email, :first_name, :last_name, :age, :image)
        end
end
