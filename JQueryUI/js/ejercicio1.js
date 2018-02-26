
$(document).ready(function(){
    $( function() {
        $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
        });
        $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
        });
    } );
    $( function() { 
        $("#eraser").on("click", function() {
            $("#dialog-confirm p").css("display", "block");
            $( "#dialog-confirm" ).dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Delete all items": function() {
                    $( this ).dialog( "close" );
                    },
                    Cancel: function() {
                    $( this ).dialog( "close" );
                    },
                },
            });
        });
    });
});