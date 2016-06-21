class AddTeamToPlayers < ActiveRecord::Migration
  def change
    change_table :players do |t|
      t.references :team
    end

    add_index :players, [:team_id]
  end
end
