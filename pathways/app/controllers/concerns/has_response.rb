module HasResponse
  extend ActiveSupport::Concern

  included do
    before_action :set_response
  end

  def set_response
    @response = Response.find_or_create_by(id: cookies.encrypted[:response_id])
    cookies.encrypted[:response_id] = @response.id
  end
end
