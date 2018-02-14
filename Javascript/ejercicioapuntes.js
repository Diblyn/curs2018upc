window.addEventListener('load', cargaEventos);

    function cargaEventos(){
        document.getElementsByClassName("submit").addEventListener("click", alerta);
    }

    function alerta(){
        alert("seguro que quiere enviarlo");
    }