class Concern < ApplicationRecord
  self.table_name = :pathways_concerns

  belongs_to :response

  validates :category, presence: true, inclusion: { in: ['finance', 'social support', 'legal', 'housing', 'health'] }
  validates :score, presence: true
end
