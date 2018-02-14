window.addEventListener('load', cargaEventos);

    function cargaEventos(){
        document.getElementsByClassName("submit").addEventListener("click", alerta);
        document.getElementById("fotodecoration").addEventListener("click", efectofoto);
    }

    //1 aparezca alert antes de enviar formulario
    function alerta(){
        alert("seguro que quiere enviarlo");
    }
    //2 
    function efectofoto(){
        img.hover{
            alert("está prohibida su copia");
        }

    }