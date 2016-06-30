class CreateDoughnuts < ActiveRecord::Migration[5.0]
  def change
    create_table :doughnuts do |t|
      t.string :name
      t.string :description
      t.boolean :regular
      t.float :cost

      t.timestamps
    end
  end
end
