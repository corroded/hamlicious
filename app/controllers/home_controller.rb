class HomeController < ApplicationController
  def index
    @files = []
    files = Dir.glob('app/views/projects/*')
    files.each do |file|
       @files << file.slice(19, file.length-1)
    end
    
    #@files = @files #.slice(1, files.length-1)
  end
end
