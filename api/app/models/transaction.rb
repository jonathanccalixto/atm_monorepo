class Transaction < ApplicationRecord
  attr_accessor :kind

  belongs_to :account
  belongs_to :source, class_name: 'Account', optional: true

  after_initialize :infer_kind
  validates :kind, presence: true,
                   inclusion: { in: [:credit, :debit, 'credit', 'debit'] }
  validates :value, presence: true,
                    numericality: { greater_than: 0.0, allow_blank: true, if: :credit? },
                    numericality: { less_than: 0.0, allow_blank: true, if: :debit? }
  validate :balance_greater_than_or_equal_to_zero

  def debit?
    kind.in? [:debit, 'debit']
  end

  def credit?
    kind.in? [:credit, 'credit']
  end

  private

  def infer_kind
    return unless persisted?

    if value.blank?
      self.value = 0.0
      self.kind = :credit
    elsif value.positive? || value.zero?
      self.kind = :credit
    elsif value.negative?
      self.kind = :debit
    end
  end

  def balance_greater_than_or_equal_to_zero
    return if value.blank?

    balance = account.transactions.where.not(id: id).sum(:value) + value

    return true if balance >= 0.0

    errors.add :base, :no_balance, message: 'No balance available'
  end
end
