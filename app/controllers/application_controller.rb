class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    
    before_action :authorize
    

  # def render_unprocessable_entity(invalid)
  #   render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  # end 

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized, please login"] }, status: :unauthorized unless @current_user
  end
  
  
  private
  
  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
  
  def render_not_found(exception)
     #confiure the response to work with the error handleng we have on the frontend. 
     render json: { error: exception.message }, status: :not_found
 end 

end
