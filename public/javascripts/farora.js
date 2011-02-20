$(document).ready(function() {
  $('#date').datepicker({
    inline: true,
    dateFormat: 'yy/mm/dd',
    minDate: 0
  });
  
  $("#start-time").timepicker();
  $("#end-time").timepicker();
  
});