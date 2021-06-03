class Account < ApplicationRecord
  validates :name, presence: true
  validates :password, presence: true, confirmation: true
  validates :agency, presence: true
  validates :account, presence: true,
                      uniqueness: { scope: :agency },
                      format: /\d{1,7}-\d/
end
