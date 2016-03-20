class User < ActiveRecord::Base
  has_many :tweets

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def as_json(options={})
    { id: id, name: display_name, gravatar: gravatar }
  end

  def display_name
    first_name.present? ? "#{first_name} #{last_name}" : email
  end

  def gravatar
    hash = Digest::MD5.hexdigest(email)
    "http://www.gravatar.com/avatar/#{hash}"
  end

  def self.who_to_follow(current_user_id)
    where(["id != :current_user_id AND NOT EXISTS (
        SELECT 1 FROM followers
        WHERE user_id = users.id
        AND followed_by = :current_user_id
      )", { current_user_id: current_user_id }])
    .order("random()").all
  end
end
