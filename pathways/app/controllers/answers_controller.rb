class AnswersController < ApplicationController
  include HasResponse

  def create
    @answer = Answer.find_or_initialize_by(question_id: answer_params[:question_id], response: @response)
    @answer.assign_attributes(text: answer_params[:text])

    if @answer.save
      head :created
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:question_id, :text)
  end
end
