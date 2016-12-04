class AddIsOnlineToDoughnuts < ActiveRecord::Migration[5.0]
  def change
    add_column :doughnuts, :for_online, :boolean
  end
end
