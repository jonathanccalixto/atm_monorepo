class TransferForm
  include ActiveModel::Model

  attr_accessor :source, :agency, :account, :value

  validates :source, :agency, :account, presence: true
  validates :value, presence: true, numericality: { greater_than: 0.0 }
  validate :destination_association_exists, :source_with_balance

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

  def parsed_value
    @parsed_value ||= BigDecimal(value)
  end

  def destination
    @destination ||= Account.find_by(agency: agency, account: account)
  end

  def debit
    @debit ||= source.withdraw(value: -parsed_value, kind: :debit, source: destination)
  end

  def credit
    @credit ||= destination.deposit(value: parsed_value, kind: :credit, source: source)
  end

  def destination_association_exists
    return true if agency.blank? || account.blank?

    if destination.nil?
      errors.add :agency, :invalid
      errors.add :account, :invalid
    elsif destination == source
      errors.add :base, :invalid, message: 'Cannot transfer to your own account'
    end
  end

  def source_with_balance
    return true if source.balance - value.to_f >= 0

    errors.add :base, :no_balance, message: 'No balance available'
  end
end