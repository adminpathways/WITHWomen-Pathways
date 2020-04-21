class ConcernsController < ApplicationController
  include HasResponse
  before_action :set_concerns

  def create
    valid = true
    @concerns.each do |concern|
      next if concern.valid?

      valid = false
      render json: concern.errors, status: :unprocessable_entity
      break
    end

    @concerns.each(&:save) && head(:created) if valid
  end

  private

  def set_concerns
    @concerns = []
    concerns_params = params[:concerns].is_a?(String) ? JSON.parse(params[:concerns]) : params[:concerns]
    concerns_params.each do |concern_params|
      concern = Concern.find_or_initialize_by(response: @response, category: concern_params['category'])
      concern.assign_attributes(score: concern_params['score'])
      @concerns << concern
    end
    @concerns
  end
end
