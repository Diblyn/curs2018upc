$(document).ready(cargaEventos);

function cargaEventos(){
    $("button").on("click",function(event){
        var link=$(this).attr("href");
});
}