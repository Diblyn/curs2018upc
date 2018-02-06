var mensaje

var meses = ["enero", "febrero", "marzo", "abril", "marzo", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

/* ejercicio 7a */
var diasemana, i;

diasemana = ["lunes", "martes", "miercoles", "jueves", "vienes", "sabado", "domingo"];
/* 
for ( i = 0; i < 7;i++){
alert(diasemana[i]);
} 
*/
/*
for (i in diasemana){
    alert(diasemana[i]);
}
*/
/*
i=0;
while (i<7){
alert(diasemana[i])
i++;
}
*/
/*
i=0;
do{
 alert(diasemana[i]);
i++;
}while(i<7);
*/
/* 7b */

/*
var final=false;


while(final!=true){
    */

    /* var mes=prompt("dame mes...");*/


/*
    var mes=meses[Math.floor((Math.random() * 20) + 1)]
    var posicion = meses.indexOf(mes);
    if(posicion!=-1){
        alert("ok");
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
 var inicial = prompt("dame un 2");


 resdo = inicial;
 while(resdo <100){
   var resdo = resdo* inicial;
 }
 alert(resdo);
 

 