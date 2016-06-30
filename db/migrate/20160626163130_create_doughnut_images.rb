class CreateDoughnutImages < ActiveRecord::Migration[5.0]
  def change
    create_table :doughnut_images do |t|

      t.timestamps
    end
  end
end
