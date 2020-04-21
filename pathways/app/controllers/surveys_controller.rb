class SurveysController < ApplicationController
  before_action :set_survey, except: :results

  def show
  end

  def start
    cookies[:response_id] = Response.create(at_clinic: at_clinic?).id
    redirect_to survey_question_path(@survey, @survey.next_question(at_clinic?).index)
  end

  def finish
    @response = Response.find(cookies[:response_id])
    return unless @response.finalize

    cookies[:last_response_id] = cookies[:response_id]
    redirect_to survey_results_url(@survey)
  end

  def results
    @survey = Survey.find_by!(slug: params[:survey_slug])
    @response = Response.find(cookies[:response_id])
    @answers = Answer.where(response: @response)
    cookies[:response_id] = nil
  rescue StandardError
    render template: 'errors/not_found', status: :not_found
  end

  private

  def set_survey
    @survey = Survey.find_by!(slug: params[:slug])
  end
end
