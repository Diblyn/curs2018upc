$( function() {
  $( "#tabs" ).tabs({
    event: "mouseover",
    //active: false,
    collapsible: true,
    //show: {effect: "blind", duration: 800}
  });
} );

//es necessita tenir els css aplicats per a veure que funcioni
function tabVertical(){
  $("#tabs").tabs().addClass( "ui-tabs-vertical ui-helper-clearfix");
  $(" #tabs li").removeClass("ui-corner-top").addClass("ui-corner-lefet");
}
