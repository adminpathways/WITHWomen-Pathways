require 'test_helper'

class ConcernsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @concern = concerns(:one)
  end

  test 'should create or update concerns' do
    assert_difference('Concern.count') do
      post concerns_url, params: { concerns: [{ category: @concern.category, score: @concern.score }] }
    end

    assert_difference('Concern.count', 0) do
      post concerns_url, params: { concerns: [{ category: @concern.category, score: @concern.score }] }
    end

    assert_response :success
  end
end
