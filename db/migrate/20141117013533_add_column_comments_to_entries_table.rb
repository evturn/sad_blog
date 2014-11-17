class AddColumnCommentsToEntriesTable < ActiveRecord::Migration
  def change
    add_column :entries, :comment, :text
  end
end
