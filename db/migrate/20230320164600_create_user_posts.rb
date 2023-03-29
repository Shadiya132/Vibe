class CreateUserPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :user_posts do |t|
      t.integer :post_id, null: false, foreign_key: true
      t.integer :user_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
