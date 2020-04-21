class ApplicationMailer < ActionMailer::Base
  default from: "#{APP[:email_name]} <#{APP[:email_from]}>"
  default to: APP[:email_to]
  layout 'mailer'
end
