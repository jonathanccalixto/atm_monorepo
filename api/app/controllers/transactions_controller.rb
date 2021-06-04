class TransactionsController < ApplicationController
  def balance
    response_render_with payload: { balance: current_account.balance },
                         messages: [], status: :ok
  end
end
