class ProjectsController < ApplicationController
  def index
    render :action => "#{params[:id]}/index"
  end
end
