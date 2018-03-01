$(document).ready(function() { 
    $('#slidervila div:gt(0)').hide();
    setInterval(function(){
      $('#slidervila div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#slidervila');
    }, 4000);
});