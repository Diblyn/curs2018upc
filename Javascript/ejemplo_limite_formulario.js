function limita(maximoCaracteres) {
    var elemento = document.getElementById("Sugerencias");
    contador(elemento.value.length, maximoCaracteres);
    if(elemento.value.length > maximoCaracteres ) {
        return false;
    }
    else {
        return true;
    }
}

function contador(actual, max){
    var resdo =max - actual;
    document.getElementById("contador").innerHTML = resdo;
}