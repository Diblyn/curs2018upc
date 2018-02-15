window.addEventListener('load', cargaEventos);

var semaforo = true;

    function cargaEventos(){
        document.getElementsByClassName("submit")[0].addEventListener("click", alerta);
        document.getElementById("fotodecoration").addEventListener("mouseover", efectofoto);
        var camps = document.getElementsByTagName("input");
        var camp2 = document.getElementsByTagName("select");
        for(j=0;j <camps.length; j++){
            camps[j].addEventListener("change", cambios);
            camps[j].addEventListener("blur", cambios);
        }
            for(j=0;j <camp2.length; j++){
            camp2[j].addEventListener("change", cambios);
            camp2[j].addEventListener("blur", cambios);
        }
        document.addEventListener("unload", despedida);
    }

    //1 aparezca alert antes de enviar formulario
    function alerta(){
        alert("seguro que quiere enviarlo?");
    }
    //2 avise al pasar el ratón por encima
    function efectofoto(){
        alert("está prohibida su copia");
        }

    //3 modificar algún texto y añadir alerts si se modifican 
    function cambios (){
        
        if (semaforo == true){
        alert("vigila que es canvia");   
        semaforo = false;     
        }
        else{
            semaforo = true;
        }
    }

    //4 Mostrar mensaje de despedida al cerrar la página
    function despedida(this){
        alert("vigila que hem tanques");
    }
    