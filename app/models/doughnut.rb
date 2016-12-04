class Doughnut < ApplicationRecord
  has_many :doughnut_images
  belongs_to :order, optional: true

  accepts_nested_attributes_for :order, :allow_destroy => true
end
