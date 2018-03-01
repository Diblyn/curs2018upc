$(document).ready(cargaEventos);
function cargaEventos(){
    // Guardem el link d'on es clica
    $("a").on("click",function(event){
        event.preventDefault();
        var link=$(this).attr("href");
        console.log(link);
        //posar el contingut al #slider
        $("#slider").load(link,"#slider");
    });
}
// obrir-ho per FIREFOX EXPLORER!!
