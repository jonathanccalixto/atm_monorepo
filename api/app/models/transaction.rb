class Transaction < ApplicationRecord
  belongs_to :account
  belongs_to :source, optional: true
end
