class Response < ApplicationRecord
  self.table_name = :pathways_responses

  has_many :answers, dependent: :destroy

  def with_all_answers?
    answers.length == Question.count
  end

  def finalize
    update(score: total_score, completed_at: Time.current)
  end

  def total_score
    answers.to_a.sum(&:score)
  end
end
