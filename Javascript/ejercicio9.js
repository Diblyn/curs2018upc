/*
definir función muestre info de 1 cadena
determinar si está formada por mayúscula, minusc o ambas

*/
/*
var cadenatexto, resultado;
cadenatexto = prompt("pon una cadena de texto aquí");
function cadenatxt(cadenatexto){
          
        // Comprobar mayúsculas y minúsculas
        if(cadenatexto == cadenatexto.toUpperCase()) {
          resultado += " está formada sólo por mayúsculas";
        }
        else if(cadenatexto == cadenatexto.toLowerCase()) {
          resultado += " está formada sólo por minúsculas";
        }
        else {
          resultado += " está formada por mayúsculas y minúsculas";
        }
    return resultado;
}
*/
var cadenatexto;
cadenatexto = prompt("pon una cadena de texto aquí");
str=cadenatxt(cadenatexto);
alert(str);





function cadenatxt(cadenatexto){

    var resultado="algo ha ido mal";
    var caso = 0;

    if(cadenatexto.length>0 && cadenatexto == cadenatexto.toUpperCase()){
        caso=1;
       // resultado = " está formada sólo por mayúsculas";

    }else if(cadenatexto.length>0 && cadenatexto == cadenatexto.toLowerCase()){
        caso=2;
       // resultado = " está formada sólo por minúsculas";

    }else if(cadenatexto.length>0 ){
        caso=3;
       // resultado = " está formada por mayúsculas y minúsculas";

    }



    switch(caso){
    // Comprobar mayúsculas y minúsculas
        case 1:{
          resultado = " está formada sólo por mayúsculas";
          break;
        }
        case 2:{
         resultado = " está formada sólo por minúsculas";
         break;
        }
        case 3:{
         resultado = " está formada por mayúsculas y minúsculas";
         break;
        }

    }

    return resultado;
}
   