class AddOrderIdToDoughnuts < ActiveRecord::Migration[5.0]
  def change
    add_column :doughnuts, :order_id, :integer
  end
end
