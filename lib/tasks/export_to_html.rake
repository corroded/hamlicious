begin
  namespace :hamlicious do
    desc "Exports pages of app to html for submission"
    task :export_to_html => :environment do
      puts "Hellp world"
    end
    

  end
rescue Exception => e
  puts e
end
