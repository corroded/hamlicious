begin
  require 'nokogiri'
  require 'open-uri'
  
  namespace :hamlicious do
    desc "Exports pages of app to html for submission"
    task :export_to_html => :environment do
      project_name = ENV["PROJECT_NAME"]
      actions = ENV["ACTIONS"].blank? || ENV["ACTIONS"].split(",").size < 2 ? ["index"] : ENV["ACTIONS"].split(",")
      actions.each do |action|
        url = "http://localhost:3000/projects/#{project_name}/show/#{action}"
        puts "GENERATING...#{url}"
        FileUtils.mkdir_p "html/"
        file_name = ""
        if action.eql?("index")
          url = "http://localhost:3000/projects/#{project_name}"
          file_name = "html/index.html"
        else
          file_name = "html/#{action}.html"
        end

        system "curl #{url} > #{file_name}"
        
        text = File.read(file_name)
        replace = text.gsub("/stylesheets/compiled/#{project_name}", "stylesheets/#{project_name}")
        replace = replace.gsub('/stylesheets/compiled/', "stylesheets/#{project_name}")
        replace = replace.gsub("/images/#{project_name}/", "images/#{project_name}/")
        replace = replace.gsub("/javascripts/", "javascripts/")
        File.open(file_name, "w") {|file| file.puts replace}
        
        
        # File.open(file_name, "w") {
        #   |file| file.puts file.gsub(, "replace string")
        # }
        # 
        puts "creating images folder..."
        FileUtils.mkdir_p "html/images"
        system "cp -r public/images/#{project_name} html/images"

        puts "creating stylesheets folder..."
        FileUtils.mkdir_p "html/stylesheets"
        system "cp -rf public/stylesheets/compiled/#{project_name} html/stylesheets"

        puts "creating javascripts folder..."
        FileUtils.mkdir_p "html/javascripts"
        system "cp -r public/javascripts html"
        
        css_file = "html/stylesheets/#{project_name}/main.css"
        css_line = File.read(css_file)
        replace = css_line.gsub("/images/", "../../images/")
        File.open(css_file, "w") {|file| file.puts replace}

          
        # doc = Nokogiri::HTML(open(url))
      end
      # system("for i in `ls app/views/projects/*.html.haml | grep -v \^_ ` ; do BASENAME=`basename $i | awk '{print $1}' FS='.'`; mkdir -p html; curl http://localhost:3000/$BASENAME > html/$BASENAME.html; done")
    end

  end
rescue Exception => e
  puts e
end
