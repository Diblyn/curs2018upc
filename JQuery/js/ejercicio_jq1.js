 $(document).ready(function(){
    $("a").on("click",function(event){
        event.preventDefault();
        var link = $(this).attr("href");
        console.log(link);
        $("#contenido").load(link);
    });
}); 



/* $(document).ready(cargaEventos);

function cargaEventos(){
    
        $("a").on("click",carga);
};

function carga(){
    event.preventDefault();
    console.log("dentro");
    console.log($(this));
    var link = $(this).attr("href");
    console.log(link);
    $("#contenido").load(link);
}  */


/* tb es pot fer de forma asíncrona (AJAX)
function mostrarContenido(){ 
    $.post(link, function(data){
        $("#div3").html(data);
});
}
*/
