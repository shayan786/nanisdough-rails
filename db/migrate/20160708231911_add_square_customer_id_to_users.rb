class AddSquareCustomerIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :square_customer_id, :string
  end
end
