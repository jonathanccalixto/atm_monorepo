class TransferForm
  include ActiveModel::Model

  attr_accessor :source, :destination, :value

  validates :source, :destination, presence: true
  validates :value, presence: true, numericality: { greater_than: 0.0 }
  validate :source_with_balance

  def transfer
    return false unless valid?

    ApplicationRecord.transaction do
      debit.save!
      credit.save!
    end

    true
  rescue => e
    puts "#{e.class}: #{e}"
    false
  end

  private

  def debit
    @debit ||= source.withdraw(value: value, source: destination)
  end

  def credit
    @credit ||= destination.deposit(value: value, source: source)
  end

  def source_with_balance
    return true if source.balance - value.to_f >= 0

    errors.add :base, :no_balance, message: 'No balance available'
  end
end