class CreateConcerns < ActiveRecord::Migration[6.0]
  def change
    create_table :pathways_concerns do |t|
      t.references :response, null: false
      t.string :category, null: false
      t.integer :score, null: false
      t.datetime :created_at, null: false

      t.index %i[response_id category], unique: true

      t.foreign_key :pathways_responses, column: :response_id
    end
  end
end
