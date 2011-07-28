module ApplicationHelper
  def controller_action_class
    "#{controller.controller_name}-pages"
  end
end
