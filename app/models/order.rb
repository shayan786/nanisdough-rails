class Order < ApplicationRecord
  has_many :doughnuts
  belongs_to :user, optional: true

  accepts_nested_attributes_for :doughnuts, :allow_destroy => true
end
