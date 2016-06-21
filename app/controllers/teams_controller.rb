class TeamsController < ApplicationController
  def index
    render_teams
  end

  def create
    Team.create team_params
    render_teams
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end

  def render_teams
    render json: Team.all
  end

end

