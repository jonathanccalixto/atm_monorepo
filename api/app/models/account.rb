class Account < ApplicationRecord
  has_many :transactions

  validates :name, presence: true
  validates :password, presence: true, confirmation: true
  validates :agency, presence: true
  validates :account, presence: true,
                      uniqueness: { scope: :agency },
                      format: /\d{1,7}-\d/

  def balance
    transactions.sum(:value)
  end
end
