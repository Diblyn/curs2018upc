numero = prompt("qué número factorial quieres saber?");
if (isNaN(numero)){
    alert("el número no es válido");
} else{
    factor(numero);
    function factor(num){
        //return num>1?numero*factorial(--num):1;
        
        if (num>1){
           var ret = num*factorial(--num);
        } else{
            ret = 1;
        }
     
    return numero;
    
    }
}

    