class SignInForm
  include ActiveModel::Model

  attr_accessor :agency, :account, :password
  attr_reader :token

  validates :agency, :account, :password, presence: true
  validate :credentials_are_valid

  def authenticated?
    self.token = nil

    return false unless valid?

    self.token = TokenCoder.encode(account_model.id)

    true
  end

  private

  attr_writer :token

  def account_model(force_reload: false)
    @account_model = nil if force_reload
    @account_model ||= Account.find_by(agency: agency, account: account, password: password)
  end

  def credentials_are_valid
    return if agency.blank? || account.blank? || password.blank?

    errors.add :base, 'credentials are invalid' unless account_model(force_reload: true)
  end
end