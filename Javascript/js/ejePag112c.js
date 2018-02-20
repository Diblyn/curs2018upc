window.addEventListener('load', cargaEventos);

function cargaEventos(){
    // no cal document.getElementById("tarea").setAttribute("onKeyUp","return limita(10);");
    // s'ha de fer sense setAttribute --> document.getElementById("tarea").setAttribute("onKeyDown","return limita(10);");
    document.getElementById("tarea").addEventListener(mouseover, limita(10));
}

function limita(maximoCaracteres) {
    var diferencia;
    var elemento = document.getElementById("tarea");
    if(elemento.value.length >= maximoCaracteres ) {
        diferencia = maximoCaracteres - elemento.value.length;
        document.getElementById("ayuda").innerHTML = diferencia + " / " +  maximoCaracteres;
        var caracter = event.charCode || event.keyCode;
        if(!(caracter==8||caracter==46||caracter==37||caracter==39)){
            return false;
        }
    }
    diferencia = maximoCaracteres - elemento.value.length;
    document.getElementById("ayuda").innerHTML = diferencia + " / " +  maximoCaracteres;
}
