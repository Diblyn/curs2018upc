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

    // per a que et respecti has de fer cadenasinespacios.split("").reverse();
    // es millor fer usar slice (de la posicio X, fins la posició Y no inclosa), exemple (slice(1,5)) --> funciona per string i arrays

       //cadena sin espacios en blanco
       for(i=0; i < cadena.length; i++) {
        cadena = cadena.replace(" ", "");
        }
     //cadenatexto a array
     silabas = cadena.split("");
  

    //crear dos arrays frase normal y frase alreves
    textonormal = silabas;
    textoreves = silabas.reverse();
    alert(textonormal);
    alert(textoreves);

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



