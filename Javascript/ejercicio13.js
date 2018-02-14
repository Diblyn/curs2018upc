 window.addEventListener('load', cargaEventos);

            function cargaEventos(){
                //document.getElementsByTagName("input")[0].addEventListener("click", añade);
                document.getElementById("btAnadir").addEventListener("click", anade);
                document.getElementById("btEliminar").addEventListener("click", eliminar);
            }
        
            function anade(){
            var para = document.createAttribute.document("li");
            if(array_li.length==0){
                document.getElementById("btnEliminar")
                .disabled = false;
            }
            var elemento = document.createElement("li");
            var node = document.createTextNode("Consectetuer adipiscing elit");
            elemento.appendChild(node);
            var lista = document.getElementById("lista");
            lista.appendChild(para);
            }
            function eliminar(){
                var array_li = lista.getElementsByTagName("li");
                var ultimo_li = array_li[array_li.length-1];
                ultimo_li.parentNode.removechild(ultimo_li);
                if(array_li.length==0){
                    document.getElementById("btnEliminar")
                    .disabled = true;
                }
            }