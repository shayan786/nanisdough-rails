class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.float :pre_amount
      t.float :tax_amount
      t.float :total_amount
      t.boolean :pickup
      t.boolean :delivery
      t.date :date
      t.time :time

      t.timestamps
    end
  end
end
