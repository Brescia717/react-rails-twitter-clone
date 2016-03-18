class Tweet < ActiveRecord::Base
  belongs_to :user

  # The as_json method functions as it normally would, but we
  # add the `super(methods: [:name])` to include the name 
  # method defined in this model, when the json is returned.
  def as_json(options={})
    super(methods: [:name])
  end

  def name
    user.display_name
  end
end
