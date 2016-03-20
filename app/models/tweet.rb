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
    user.gravatar
  end

  def self.stream_for(current_user_id)
    joins(:user)
    .where(["users.id = :current_user_id OR users.id IN (
      SELECT user_id FROM followers
      WHERE followed_by = :current_user_id
      )", { current_user_id: current_user_id }])
    .order(created_at: :desc)
    .all
  end
end
