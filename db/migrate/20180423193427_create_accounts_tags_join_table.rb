class CreateAccountsTagsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :accounts, :tags do |t|
      t.index :tag_id
      t.index [:tag_id, :account_id], unique: true
    end
  end
end
