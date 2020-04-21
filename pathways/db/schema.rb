# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_01_193046) do

  create_table "pathways_answers", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "response_id", null: false
    t.bigint "question_id", null: false
    t.string "text", null: false
    t.integer "score"
    t.datetime "created_at", null: false
    t.index ["question_id"], name: "index_pathways_answers_on_question_id"
    t.index ["response_id", "question_id"], name: "index_pathways_answers_on_response_id_and_question_id", unique: true
    t.index ["response_id"], name: "index_pathways_answers_on_response_id"
  end

  create_table "pathways_concerns", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "response_id", null: false
    t.string "category", null: false
    t.integer "score", null: false
    t.datetime "created_at", null: false
    t.index ["response_id", "category"], name: "index_pathways_concerns_on_response_id_and_category", unique: true
    t.index ["response_id"], name: "index_pathways_concerns_on_response_id"
  end

  create_table "pathways_questions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "slug", null: false
    t.string "text", null: false
    t.json "answers", null: false
    t.index ["slug"], name: "index_pathways_questions_on_slug", unique: true
  end

  create_table "pathways_responses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "score"
    t.datetime "completed_at"
    t.datetime "created_at", null: false
  end

  add_foreign_key "pathways_answers", "pathways_questions", column: "question_id"
  add_foreign_key "pathways_answers", "pathways_responses", column: "response_id"
  add_foreign_key "pathways_concerns", "pathways_responses", column: "response_id"
end
