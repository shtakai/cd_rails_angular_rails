class AssociationsController < ApplicationController
  def index
    render_associations
  end

  def show
    render_associations
  end

  private

  def render_associations
    render json: {
      teams: Team.all,
      players: params[:id] ?  Player.all_with_team_id(params[:id]) :
                              Player.all_with_team
    }
  end
end
