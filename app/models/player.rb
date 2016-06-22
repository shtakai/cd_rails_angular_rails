class Player < ActiveRecord::Base
  belongs_to :team

  validates :first_name, :last_name, presence: true

  def self.all_with_team
    self.eager_load(:team).map{|p| {
      id: p.id,
      first_name: p.first_name,
      last_name: p.last_name,
      team_id: p.team_id,
      team_name: p.team ? p.team.name : nil
    }}
  end
end
