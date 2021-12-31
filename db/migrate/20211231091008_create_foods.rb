class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.string :last_name, null: false
      t.string :kanji_name, null: false
      t.string :color, null: false
      t.timestamps
    end
  end
end
