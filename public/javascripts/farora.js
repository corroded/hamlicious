$(function(){
  var serviceNumber = 1;

  cloneField = function(selector, newId) {
    var newField = $(selector).clone();
    newField.attr("id", newId+"-"+serviceNumber);
    newField = $('<div>').append(newField.clone()).remove().html();
    serviceNumber++;
    return newField;
  }
})

$(document).ready(function() {
  $('#date').datepicker({
    inline: true,
    dateFormat: 'yy/mm/dd',
    minDate: 0
  });
  
  
  $(".add-service").click( function(){
    serviceSelect = cloneField(".type-of-service select", "service-type");
    stylistSelect = cloneField(".stylist select", "stylist-name");
    priceInput = cloneField(".price:first input", "price-for");
    var cloneHtml = "<li class='additional-services'><label>Type of Service</label>" + serviceSelect + "</li><li><label>Stylist</label>" + stylistSelect + "</li><li class='no-count price'><label>Price</label>" + priceInput + "</li>";
    $(".after-count").before(cloneHtml);
    return false;
  });
  
  $('input.star').rating();
});