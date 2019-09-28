class AddHitsToLink < ActiveRecord::Migration[5.1]
  def change
    add_column :links, :hits, :int
  end
end
