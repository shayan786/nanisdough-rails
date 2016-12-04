class AddForMenuToDoughnuts < ActiveRecord::Migration[5.0]
  def change
    add_column :doughnuts, :for_menu, :boolean
  end
end
