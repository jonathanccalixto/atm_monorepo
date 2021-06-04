class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.belongs_to :account, null: false, foreign_key: true
      t.belongs_to :source, foreign_key: { to_table: :accounts }
      t.decimal :value

      t.timestamps
    end
  end
end
