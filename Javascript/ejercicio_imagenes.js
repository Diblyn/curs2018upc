window.addEventListener("load", cargareventos);
function cargareventos(){
    var fotos = document.getElementById("listado").children;
    console.log(fotos);
    for(elements of fotos){
        elements.addEventListener("click",amplia);
    }
}
function amplia(){
    var fotoppal = this.src;
    document.getElementById("fotogran").style.backgroundImage =  "url('"+fotoppal+"')";
    console.log(fotoppal);
    console.log(document.getElementById("fotogran"));

    //posar nom o títol al vehicle

    var nomcar = this.title;
    console.log(nomcar);
    document.getElementById("nombrecoche").innerHTML =  nomcar;
    var para = document.createElement("p");
    var node = document.createTextNode('"+nomcar+"');
    var element = document.getElementById("nombrecoche");
    element.appendChild(para)
    console.log(para);
} 