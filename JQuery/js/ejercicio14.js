$(document).ready(cargaEventos);

//tb es pot fer d'anar a buscar l'enllaç directament a la linia 7: $("a"[i]).on("click",mostrarocultar);
function cargaEventos(){
    for(i=0;i<=$("a").length;i++){
        console.log($("a").length);
    $("#enlace_"+i).on("click",mostrarocultar);
    }
}

function mostrarocultar(){
    console.log($(this).text());
    console.log($(this).prev());
if($(this).text() =="Ocultar contenidos"){
        $(this).prev().hide();
        $(this).text("Mostrar contenidos");
    } else{
        $(this).prev().show();
        //console.log(this.innerHTML);
        $(this).text("Ocultar contenidos");
    }
}








// window.addEventListener('load', cargaEventos);

//             function cargaEventos(){
//                 document.getElementById("enlace_1").addEventListener("click", muestraOculta1);
//                 document.getElementById("enlace_2").addEventListener("click", muestraOculta2);
//                 document.getElementById("enlace_3").addEventListener("click", muestraOculta3);
//                 document.getElementById("enlace_4").addEventListener("click", muestraOculta4);
//             }
        
//             function muestraOculta1(){
//                 if(document.getElementById("enlace_1").innerHTML=="Ocultar contenidos"){
//                     document.getElementById("contenidos_!").style.display='none';
//                     document.getElementById("enlace_1").innerHTML="Mostrar contenidos";
//                 } else{
//                     document.getElementById("contenidos_1").style.display='block';
//                     document.getElementById("contenidos_1").style.display="none";
//                     document.getElementById("enlace_1").innerHTML="Ocultar contenidos";
//                 }
                
//             }
