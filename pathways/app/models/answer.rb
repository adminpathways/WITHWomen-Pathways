class Answer < ApplicationRecord
  self.table_name = :pathways_answers

  belongs_to :response
  belongs_to :question

  validates :text, presence: true
  validate :text_in_list

  before_save :set_score
  after_save :update_response

  def text_in_list
    errors[:text] << 'is not in the list' unless question.nil? || question.answers.map { |x| x['text'] }.include?(text)
  end

  def set_score
    self.score = question.answers.find { |x| x['text'] == text }['score'] unless question.nil?
  end

  def update_response
    if response.with_all_answers?
      response.finalize
    else
      response.update(score: response.total_score)
    end
  end
end
