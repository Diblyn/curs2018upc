$(document).ready(function(){
    
   $('input[type=radio]').on("click", function(){
        console.log("hola");
        if ($(this).val()=="busca"){
        
        $("#contenidor").load("html/buscador.html",function(response,status,xhr){
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#contenidor" ).html( msg + xhr.status + " " + xhr.statusText );
            };
            $("#contenidor").html=response;
        });
        $(".a1").hide();
        $(".a2").show();
       } else{
        $("#contenidor").load("html/nom.html",function(response,status,xhr){
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#contenidor" ).html( msg + xhr.status + " " + xhr.statusText );
            };
            $("#contenidor").html=response;
        });
        $(".a2").hide();
        $(".a1").show();
       }
   });
});