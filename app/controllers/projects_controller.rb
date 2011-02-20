class ProjectsController < ApplicationController
  def index
    render "app/views/projects/#{params[:id]}/index"
  end
end
