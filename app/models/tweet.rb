class Tweet < ActiveRecord::Base
  belongs_to :user

  # The as_json method functions as it normally would, but we
  # add the `super(methods: [:name])` to include the name
  # method defined in this model, when the json is returned.
  def as_json(options={})
    super(methods: [:name, :gravatar])
  end

  def name
    user.display_name
  end

  def gravatar
    hash = Digest::MD5.hexdigest(user.email)
    "http://www.gravatar.com/avatar/#{hash}"
  end
end
