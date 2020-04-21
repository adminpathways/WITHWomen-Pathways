class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :pathways_responses do |t|
      t.integer :score
      t.datetime :completed_at

      t.datetime :created_at, null: false
    end
  end
end
