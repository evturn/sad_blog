class Entry < ActiveRecord::Base
  belongs_to(:user)

  def tags
    self.body.scan(/#(\w+)/).flatten
  end

end