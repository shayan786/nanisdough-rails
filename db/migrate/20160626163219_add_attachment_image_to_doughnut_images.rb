class AddAttachmentImageToDoughnutImages < ActiveRecord::Migration
  def self.up
    change_table :doughnut_images do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :doughnut_images, :image
  end
end
