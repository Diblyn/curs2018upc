/* 
1- función que pasa como parametro un numero entero 
2- lo devuelve como cadena de texto indicando par o impar 
3- mostrar resultado de la funcion
*/

var num, resultado; 
num = prompt("dime un numero");

resultado=esEntero(num);
alert(resultado);


function esEntero (num){
    var resultado="algo ha ido mal";

    if (isNaN(num)){
        //alert(num +"no es un número");
    }
    else{
        if ( num % 2 == 0){
            //alert("es un numero par el " + num);
            resultado = "par";
        }
        else {
            //alert ("es un número impar el " + num);
            resultado = "impar";
        }
    }
    return resultado;
}

/*

function x(n){
    return(n%2? "impar "par");
}
y = X(número)
alert("el " + numero +" es"+y+);
*/
