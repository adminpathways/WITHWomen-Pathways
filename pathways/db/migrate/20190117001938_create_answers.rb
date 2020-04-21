class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :pathways_answers do |t|
      t.references :response, null: false
      t.references :question, null: false
      t.string :text, null: false
      t.integer :score
      t.datetime :created_at, null: false

      t.index %i[response_id question_id], unique: true
      t.foreign_key :pathways_responses, column: :response_id
      t.foreign_key :pathways_questions, column: :question_id
    end
  end
end
