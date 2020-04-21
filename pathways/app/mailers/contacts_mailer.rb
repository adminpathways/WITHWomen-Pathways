class ContactsMailer < ApplicationMailer
  def inquiry(contact)
    @contact = contact

    mail subject: contact.subject
  end
end
