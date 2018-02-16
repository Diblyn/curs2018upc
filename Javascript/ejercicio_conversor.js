window.addEventListener("load", cargareventos);
function cargareventos(){
    //posar per a que els botons facin funció onclick
}
var cambio=166.386;

function conversorpesetas(){
    var peseta = document.getElementById("Pesetas");
    var euro = document.getElementById("Euros");
    if(!isNaN(peseta.value) && peseta.value != ""){
    var resdo = peseta.value / cambio;
    console.log(resdo.value);
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
    peseta.value = resdo;
    } else{
        alert("pon cifras idiota");
    }
}