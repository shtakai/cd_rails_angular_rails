class TeamsController < ApplicationController
  def index
    render_teams
  end

  def create
    team = Team.new team_params
    team.valid?
    errors = team.errors ? team.errors.messages : nil
    team.save
    render_teams errors
  end

  def destroy
    Team.find_by_id(params[:id]).destroy
    render_teams
  end

  private

  def team_params
    # TODO ParameterMissing
    params.require(:team).permit(:name)
  end

  def render_teams(errors=nil)
    render json: {
       teams: Team.all,
       errors: errors
    }
  end

end

