class Contact
  include ActiveModel::Validations::Callbacks
  include ActiveModel::Validations

  strip_attributes collapse_spaces: true

  # to deal with form, you must have an id attribute
  attr_accessor :id, :name, :email, :subject, :message

  validates :name, presence: true
  validates :email, presence: true
  validates :subject, presence: true
  validates :message, presence: true

  def initialize(attributes = {})
    attributes.each do |key, value|
      send("#{key}=", value)
    end
    @attributes = attributes
  end

  def read_attribute_for_validation(key)
    @attributes[key]
  end

  def to_key
  end

  def persisted?
    false
  end

  def save
    valid?
  end
end
