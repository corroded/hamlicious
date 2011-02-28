class ProjectsController < ApplicationController
  def index
    render "app/views/projects/#{params[:id]}/index"
  end
  
  def show
    @myaction = params[:view]
    puts @myaction + " " + params[:view]
    render "app/views/projects/#{params[:id]}/main"
  end
end