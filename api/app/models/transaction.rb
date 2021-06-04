class Transaction < ApplicationRecord
  belongs_to :account
  belongs_to :source, optional: true

  validate :balance_greater_than_or_equal_to_zero

  private

  def balance_greater_than_or_equal_to_zero
    balance = account.transactions.where.not(id: id).sum(:value) + value

    return true if balance >= 0.0

    errors.add :base, :no_balance, message: 'No balance available'
  end
end
