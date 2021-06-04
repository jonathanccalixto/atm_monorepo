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

  private

  def deposit_params
    params.require(:deposit).permit(:value)
  end

  def withdraw_params
    params.require(:withdraw).permit(:value)
  end
end
