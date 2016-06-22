class PlayersController < ApplicationController
  def index
    render_players
  end

  def create
    player = Player.new player_params
    player.valid?
    errors = player.errors ? player.errors.messages : nil
    player.save
    render_players errors
  end

  def destroy
    Player.find_by_id(params[:id]).destroy
    render_players
  end

  private

  def render_players(errors=nil)
    render json: {
      players: Player.all_with_team,
      teams: Team.all,
      errors: errors
    }
  end

  def player_params
    # TODO handling ActionController::ParameterMissing when send nothing
    params.require(:player).permit(:first_name, :last_name, :team_id)
  end

end
