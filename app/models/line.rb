class Line < ApplicationRecord
  has_many :foods, dependent: :destroy
end
