class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :agency
      t.string :account
      t.string :password

      t.timestamps
    end
  end
end
