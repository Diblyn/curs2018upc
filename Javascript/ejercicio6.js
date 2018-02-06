var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var DNI, resto;

DNI = prompt("Introduzca su DNI - sin letra y todo junto");
letraDNI = prompt("Introduzca su letra");
letraDNI = letraDNI.toUppercase();
letras = letras.toUppercase();

if (DNI < 0 || DNI > 99999999){
alert("Revise su dni ya que no es correcto. Debe contener un máximo de 8 cifras");
}
/* else if ( letraDNI.length > 1){
alert("Revise su letra de DNI ya que no es correcto. Debe contener un máximo de una letra");
} */ 
else{
    resto = DNI % 23;
    alert(letras[resto]);
}    
    if (letraDNI == letras){
        alert("letra correcta");
    }
    else {
        alert("revise la letra por favor, ya que debería ser " + letraDNI +"");
    }





