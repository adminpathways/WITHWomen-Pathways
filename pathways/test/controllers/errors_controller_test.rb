require 'test_helper'

class ErrorsControllerTest < ActionDispatch::IntegrationTest
  test 'should get 401' do
    get unauthorized_url
    assert_response(401)
    assert_template :unauthorized
  end

  test 'should get 404' do
    get not_found_url
    assert_response(404)
    assert_template :not_found
  end

  test 'should get 500' do
    get internal_server_error_url
    assert_response(500)
    assert_template :internal_server_error
  end
end
