class Food < ApplicationRecord
  belongs_to :line
  validates :color , presence: { message: "must be given please" }
end
