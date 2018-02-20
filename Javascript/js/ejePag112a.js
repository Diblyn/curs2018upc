function limita(maximoCaracteres) {
    var diferencia;
    var resposta=true;
    var elemento = document.getElementById("tarea");
    if(elemento.value.length >= 			maximoCaracteres ) {
        resposta=false;
      }
//		console.log(elemento.value.length);
    diferencia = maximoCaracteres - elemento.value.length;
    document.getElementById("ayuda").innerHTML = diferencia + " / " +  maximoCaracteres;
    return resposta;
}

function resalta(elEvento) {
    var evento = elEvento || window.event;
    switch(evento.type) {
    case 'mouseover':
    this.style.borderColor = 'black';
    break;
    case 'mouseout':
    this.style.borderColor = 'silver';
    break;
    }
    }
    window.onload = function() {
    document.getElementById("seccion").onmouseover = resalta(event);
    document.getElementById("seccion").onmouseout = resalta(event);
    }