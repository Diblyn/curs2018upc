 window.addEventListener('load', cargaEventos);

            function cargaEventos(){
                document.getElementById("enlace_1").addEventListener("click", muestraOculta1);
                document.getElementById("enlace_2").addEventListener("click", muestraOculta2);
                document.getElementById("enlace_3").addEventListener("click", muestraOculta3);
                document.getElementById("enlace_4").addEventListener("click", muestraOculta4);
            }
        
            function muestraOculta1(){
                if(document.getElementById("enlace_1").innerHTML=="Ocultar contenidos"){
                    document.getElementById("contenidos_!").style.display='none';
                    document.getElementById("enlace_1").innerHTML="Mostrar contenidos";
                } else{
                    document.getElementById("contenidos_1").style.display='block';
                    document.getElementById("contenidos_!").style.display="none";
                    document.getElementById("enlace_1").innerHTML="Ocultar contenidos";
                }
                
            }
