$(document).ready(function() { 
    $('#slidermon div:gt(0)').hide();
    setInterval(function(){
      $('#slidermon div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#slidermon');
    }, 2000);
});