window.addEventListener("load", cargareventos);
function cargareventos(){
    //posar per a que els botons facin funció onclick
   document.getElementById("Pasarapesetas").addEventListener("click",conversoreuros);
   document.getElementById("Pasaraeuros").addEventListener("click",conversorpesetas);
    }
var cambio=166.386;

function conversorpesetas(){
    var peseta = document.getElementById("Pesetas");
    var euro = document.getElementById("Euros");
    if(!isNaN(peseta.value) && peseta.value != ""){
    var resdo = peseta.value / cambio;
    console.log(resdo.value);
    // posem 2 decimals només
    resdo = resdo.toFixed(2);
    euro.value = resdo; 
    } else{
        alert("pon cifras idiota");
    }
}
function conversoreuros(){
    var peseta = document.getElementById("Pesetas");
    var euro = document.getElementById("Euros");
    if(!isNaN(euro.value)){
    var resdo = euro.value * cambio;
    console.log(resdo.value);
    resdo.toFixed();
    //controlar decimales valor%1 = 0 (si el valor del resto es igual a 1, nunca será cero y se pone 0 decimales)
    valor%1 = 0
    peseta.value = resdo;
    } else{
        alert("pon cifras idiota");
    }
}