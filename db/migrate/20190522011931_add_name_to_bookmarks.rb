class AddNameToBookmarks < ActiveRecord::Migration[5.2]
  def change
    add_column :bookmarks, :name, :string
  end
end
