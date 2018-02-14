window.addEventListener('load', cargaEventos);

function cargaEventos(){
    var link = document.getElementsByTagName("a");
    for (i=0; i<link.length-1; i++){
        console.log(link[i]);
        link[i].addEventListener("click", modifica(this));
    }
}

function modifica(x){
    x.previousSibling.style.display="none";
}
