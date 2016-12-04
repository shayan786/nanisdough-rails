class AddTransactionUuidToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :transaction_uuid, :string
  end
end
