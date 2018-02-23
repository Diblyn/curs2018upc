//jQuery
var i="nada",elemento="nada";
$(document).ready(function(){

     /* $("#btnAnadir").on("click",function(){
        $(elemento).show();
    })*/
    /* $("#btnEliminar").on("click",function(){
        var elemento = $("li");
        $(elemento[elemento.length-1]).remove();
        console.log(elemento)
        console.log(elemento.length); */
        
        //un altre forma de fer-ho amb hide i show
        $("#btnEliminar").on("click",function(){
            var ocultar=$("li").length-$("li[style='display: none;']").length;
            $("li:nth-child("+ocultar+")").hide();
            console.log(elemento);
            console.log(elemento.length);
         });
         $("#btnAnadir").on("click",function(){
            var ocultar=$("li").length-$("li[style='display: none;']").length+1;
            $("li:nth-child("+ocultar+")").show();
            console.log(elemento);
            console.log(elemento.length);
         });

});
/* s'hauria de posar d'aquesta manera millor
$(document).ready(cargaEventos);

function cargaEventos(){
    $("#btnEliminar").on("click",eliminar);
    $("#btnAnadir").on("click", anadir);
}

function eliminar(){
    var elemento = $("li");
    $(elemento[elemento.length-1]).remove();
}
*/

/* JavaScript
window.addEventListener('load', cargaEventos);

            function cargaEventos(){
                //document.getElementsByTagName("input")[0].addEventListener("click", añade);
                document.getElementById("btAnadir").addEventListener("click", anade);
                document.getElementById("btEliminar").addEventListener("click", eliminar);
            }
        
            function anade(){
            var para = document.createAttribute.document("li");
            if(array_li.length==0){
                document.getElementById("btnEliminar")
                .disabled = false;
            }
            var elemento = document.createElement("li");
            var node = document.createTextNode("Consectetuer adipiscing elit");
            elemento.appendChild(node);
            var lista = document.getElementById("lista");
            lista.appendChild(para);
            }
            function eliminar(){
                var array_li = lista.getElementsByTagName("li");
                var ultimo_li = array_li[array_li.length-1];
                ultimo_li.parentNode.removechild(ultimo_li);
                if(array_li.length==0){
                    document.getElementById("btnEliminar")
                    .disabled = true;
                }
            }
    */