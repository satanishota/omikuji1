class Food < ApplicationRecord
  validates :color , presence: { message: "must be given please" }
end
