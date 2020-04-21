class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :pathways_questions do |t|
      t.string :slug, null: false
      t.string :text, null: false
      t.json :answers, null: false

      t.index :slug, unique: true
    end
  end
end
