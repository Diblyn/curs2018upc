$(document).ready(cargaEventos);

function cargaEventos(){

    $("a").on("click",function(event){
        event.preventDefault();
        var link=$(this).attr("href");
        //pots posar que només posí el contingut al #contenedor, posant: .load(link+" #contenedor",function(){}
        $("#contenido").load(link,function(response,status,xhr){
            if ( status == "error" ) {
                var msg = "Sorry but there was an error: ";
                $( "#contenido" ).html( msg + xhr.status + " " + xhr.statusText );
              }
            $("#contenido").html=response;
            $("#contenido").css("color","green");
        });
    });

  


}




