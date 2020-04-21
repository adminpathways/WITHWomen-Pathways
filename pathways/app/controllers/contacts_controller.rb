class ContactsController < ApplicationController
  def new
    @contact = Contact.new(id: 1)
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactsMailer.inquiry(@contact).deliver_now
      head :ok
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :message)
  end
end
