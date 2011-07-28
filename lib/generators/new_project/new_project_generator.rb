class NewProjectGenerator < Rails::Generators::Base
  source_root File.expand_path('../templates', __FILE__)
  argument :name, :type => :string, :default => "new_project"
  
  def generate_layout  
    copy_file "main.sass", "app/stylesheets/#{project_name.underscore}/main.sass"  
  end 
  
  private
    def project_name
      name.underscore
    end
end
