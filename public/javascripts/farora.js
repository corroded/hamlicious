$(document).ready(function() {
  $('#date').datepicker({
    inline: true,
    dateFormat: 'yy/mm/dd',
    minDate: 0
  });
  
  $("#start-time").calendricalTime();
  $("#end-time").calendricalTime();
  
});