class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :post
      t.integer :likes
      t.string :image
      t.integer :poster_id

      t.timestamps
    end
  end
end
