var mensaje

var meses = ["enero", "febrero", "marzo", "abril", "marzo", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

/* ejercicio 7a */
var diasemana, i;

diasemana = ["lunes", "martes", "miercoles", "jueves", "vienes", "sabado", "domingo"];
/* 
//pots posar enlloc de i < 7, i < diasemana.length
for ( i = 0; i < 7;i++){
alert(diasemana[i]);
} 
*/
/*

//for in
for (i in diasemana){
    alert(diasemana[i]);
}
*/
/*

//while 
i=0;
while (i<7){
alert(diasemana[i])
i++;
}
*/


//do while
/*
i=0;
do{
 alert(diasemana[i]);
i++;
}while(i<7);
*/


// 7b 

/*
var final=false;


while(final!=true){
    */

    /* var mes=prompt("dame mes...");*/


/*
    var mes=meses[Math.floor((Math.random() * 20) + 1)]
    var posicion = meses.indexOf(mes);
    if(posicion!=-1){
        alert("el mes " + mes +" se encuentra en la posicion: " + posicion);
        final=true;
    }else{
        alert("error, prova de nou");
    }
}


*/ 


// 7c 
/*
var i, num, resdo=1;
num = prompt("dame num");
for ( i=1; i <= num ;i++){
      resdo = resdo*i;
}
alert(resdo);
*/


 // 7d 
 /*
 var inicial = prompt("dame un 2");

 resdo = inicial;
 while(resdo <100){
   var resdo = resdo* inicial;
 }
 alert(resdo);
 */
/* tb es pot fer
while inicial <= 100){
    inicial*= inicial;
}
*/


//7e
/*
var i = prompt("dame un numero del 4 al 5");
for (i; i>0; i--){
var answer = confirm(i + " " + "¿continuamos?");
    if (answer == true) {
        txt = "le has dado a OK!";
    }   else {
        txt = "Cancelaste!";
        break;
        }
}
*/
/* tb es podria fer
for
var respuesta = confirm (i);
if (!respuesta){
    alert("La cuenta atrás se interrumpe");
    break;
}
*/


//7f

//meses = meses.reverse();
/*
i = 0
for (i; i<= meses.length;i++){
    alert(meses[i]);
}
*/
// un altre forma de fer-ho sense reverse
/*
i = meses.length -1;
for (i; i >=0;i--){
    alert(meses[i]);
}
*/
//7g

/* 
pedir prompt con texto de más de 5 carácteres
si está vacio o inferior a 5, seguir mostrando prompt
*/
do{
    var quest = prompt("escribe algo de más de 5 carácteres");
    alert(quest.length);
    var letrasEspacios = quest.split("");
    var cadenaSinEspacios = "";
    for (i in letrasEspacios){
        if(letrasEspacios[i] != " "){
            cadenaSinEspacios +=
            letrasEspacios[i];
        }
    }
    while(texto.length<=5);

/* amb la funcio
 replace es un altre opció
}while(quest.length < 5);
*/
/*
var i=0
while(i<5){
    var quest = prompt("escribe algo de más de 5 carácteres");
i = quest.length;
}
*/

//7h
/*
recorrer string caracter a caracter
mostrar alert x cada caracter
al llegar al final se
*/

texto = prompt("");
var letras= texto.split("");
var longitud = letras.length;
var contador=0;
while (contador<longitud && letras[contador]!="$"){
    alert(letras[contadorcontador]++);
    }