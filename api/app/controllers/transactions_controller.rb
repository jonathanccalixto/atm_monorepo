class TransactionsController < ApplicationController
  def balance
    response_render_with payload: { balance: current_account.balance },
                         messages: [], status: :ok
  end

  def deposit
    transaction = current_account.deposit(deposit_params)

    if transaction.save
      response_render_with payload: { balance: current_account.balance },
                           messages: ['Deposit successfully'], status: :created
    else
      response_render_with messages: transaction.errors.full_messages,
                           status: :unprocessable_entity
    end
  end

  def withdraw
    transaction = current_account.withdraw(withdraw_params)

    if transaction.save
      response_render_with payload: { balance: current_account.balance },
                           messages: ['Withdraw successfully'], status: :created
    else
      response_render_with payload: { balance: current_account.balance },
                           messages: transaction.errors.full_messages,
                           status: :unprocessable_entity
    end
  end

  def transfer
    account = Account.find_by(destination_params)

    transaction_transfer = TransferForm.new(source: current_account, destination: account)
    transaction_transfer.attributes = transfer_params

    if transaction_transfer.transfer
      response_render_with payload: { balance: current_account.balance },
                           messages: ['Tranfer successfully'], status: :created
    else
      response_render_with payload: { balance: current_account.balance },
                           messages: transaction_transfer.errors.full_messages,
                           status: :unprocessable_entity
    end
  end

  private

  def deposit_params
    params.require(:deposit).permit(:value)
  end

  def withdraw_params
    params.require(:withdraw).permit(:value)
  end

  def transfer_params
    params.require(:transfer).permit(:value)
  end

  def destination_params
    params.require(:transfer).permit(:agency, :account)
  end
end
