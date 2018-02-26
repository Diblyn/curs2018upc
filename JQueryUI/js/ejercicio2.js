//ejercicio 1
$(document).ready(function() {
    $( "#accordion" ).accordion();
  } );

  //customize icons
$( function() {
var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
};
$( "#accordion" ).accordion({
    icons: icons
});
$( "#toggle" ).button().on( "click", function() {
    if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
    $( "#accordion" ).accordion( "option", "icons", null );
    } else {
    $( "#accordion" ).accordion( "option", "icons", icons );
    }
});
} );

// no auto-height
$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  } );

  //reordenar paneles - sortable
$( function() {
$( "#accordion" )
    .accordion({
    header: "> div > h3"
    })
    .sortable({
    axis: "y",
    handle: "h3",
    stop: function( event, ui ) {
        // IE doesn't register the blur when sorting
        // so trigger focusout handlers to remove .ui-state-focus
        ui.item.children( "h3" ).triggerHandler( "focusout" );

        // Refresh accordion to handle new order
        $( this ).accordion( "refresh" );
    }
    });
} );