/*
definir funcion si texto es palindromo
texto a minusculas
*/
var cadena, resultado;
cadena = prompt("La ruta nos aportó otro paso natural");
alert(palindromo(cadena));


function palindromo(cadena){
    var resultado="algo ha ido mal";
    var silabas, textonormal, textoreves;

       //cadena sin espacios en blanco
    cadena = cadena.replace(" ","");
     //cadenatexto a array
     silabas = cadena.split("");
    //cadenatexto a array
    silabas = silabas.join("");
     //cadenatexto de nuevo a array
     silabas = silabas.split("");
    //crear dos arrays frase normal y frase alreves
    textonormal = silabas;
    textoreves = silabas.reverse;


    //ver que los dos arrays tienen elementos iguales
        var n = textonormal.length;
        for (i=0; i<=n-1;i++){
           if(textonormal[i]==textoreves[i]){
               resultado= true;
           }else{
            resultado= false;
           }
        }
    
    //decir si es palíndromo o no
    return resultado;
}



