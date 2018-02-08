var silabas, cadena, textonormal, textoreves;

cadena = prompt("La ruta nos aportó otro paso natural");

cadena = cadena.replace(" ","");
//cadenatexto a array
silabas = cadena.split("");
alert(silabas);
//cadenatexto a array
silabas = silabas.join("");
alert(silabas);
//cadenatexto de nuevo a array
silabas = silabas.split("");
//crear dos arrays frase normal y frase alreves
textonormal = silabas;
alert(silabas);
textoreves = silabas.reverse;
alert(textoreves);



