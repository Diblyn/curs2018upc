 window.addEventListener('load', cargaEventos);

            function cargaEventos(){
                document.getElementById("enlace").addEventListener("click", muestra);
            }
        
            function muestra(){
                document.getElementById("adicional").className = "visible";
                //elemento.style.color = "red";
                document.getElementById("enlace").className = "oculto";
            }
