class ChangeUserToBeOptionForOrders < ActiveRecord::Migration[5.0]
  def change
    change_column :orders, :user_id, :integer, null: true
  end
end
