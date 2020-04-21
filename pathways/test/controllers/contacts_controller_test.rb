require 'test_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  test 'should send email' do
    post contact_url, params: {
      contact: { name: 'Test', email: 'test@example.com', subject: 'Subject', message: 'Message' }
    }

    assert_response :success
    assert_emails 1
  end
end
