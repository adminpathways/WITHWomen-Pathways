require 'test_helper'

class AnswersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @answer = answers(:one)
  end

  test 'should create or update answer' do
    assert_difference('Answer.count') do
      post answers_url, params: { answer: { question_id: @answer.question_id, text: @answer.text } }
    end

    assert_difference('Answer.count', 0) do
      post answers_url, params: { answer: { question_id: @answer.question_id, text: @answer.text } }
    end

    assert_response :success
  end
end
