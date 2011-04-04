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
  
  if($('input.star').length) {
    $('input.star').rating();
  }
  
  if($("#salon_location").length) {
    $("#salon_location").placeHolder({
      "text"           : "Boston, MA"
    });    
  }
  
  if($("#salon_name").length) {
    $("#salon_name").placeHolder({
      "text"           : "Enter Spa Name or Search All"
    });    
  }
  
  $(".tabs ul > li > a").live("click", function(){
    var tabToOpen = $(this).attr("href");
    $(".tabs div").hide();
    $(".tabs ul > li").removeClass("current");
    $(tabToOpen).show();
    $(this).parent("li").addClass("current");
    return false;
  })
  
  $.tablesorter.defaults.widgets = ['zebra']; 
  $("#clients").tablesorter();
  
  $(".empty-favorite").live("click", function(){
    $(this).removeClass("empty-favorite");
    $(this).addClass("favorite");
    return false;
  });
  
  $(".favorite").live("click", function(){
    $(this).removeClass("favorite");
    $(this).addClass("empty-favorite");
    return false;
  });
  
  $(".search-filters input:checkbox").live("click", function(){
    var resultType = "."+$(this).val();
    if($(this).attr("checked")) {
      $(this).parents(".search-sidebar").find(".search-results li").hide();
      $(this).parents(".search-sidebar").find(".search-results").find(resultType).show();
    } else {
      $(this).parents(".search-sidebar").find(".search-results li").slideDown();
    }
  })
  
  
});