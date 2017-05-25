class Ingredient < ApplicationRecord
  ALLINGREDIENTS = Ingredient.all
  has_many :doses
  validates :name, presence: true, uniqueness: true
end
