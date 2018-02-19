window.addEventListener("load", cargareventos);
function cargareventos(){
    //posar per a que els botons facin funció al click
   /*   var  colors =document.getElementsByTagName("div");
        for(i=0; i< colors.length;i++){
        colors.addEventListener("click",colores);
        }  */
        var pags = document.getElementsByTagName("button");
        for(i=0;i<pags.length;i++){
            pags[i].addEventListener("click",paginas);
        }
        var colors =document.getElementById("colores").children;
        console.log(colors);
        for (i=0;i<colors.length;i++){
            var elements=colors[i];
            elements.addEventListener("mouseover",colores);
        }
/*  també es pot fer així:
        for (elements of colors){  
            elements.addEventListener("mouseover",colores);
        }
 */}

//canvii el títol y header de la página que es clica
function paginas(){
    console.log(this.innerHTML);
    document.getElementsByTagName("h1")[0].innerHTML = this.innerHTML;
    document.title=this.innerHTML;
}

function colores(){
    var color = getComputedStyle(this).backgroundColor;
    console.log(color);
    document.getElementsByTagName("header")[0].style.backgroundColor = color;
    document.getElementsByTagName("nav")[0].style.backgroundColor = color;
    document.getElementsByClassName("menu")[1].style.backgroundColor = color;
    //document.body.style.backgroundColor = color;
    /* si volgues canviar tots els li de la class menu--> var x = document.querySelectorAll("nav.menu");
document.getElementById("demo").innerHTML =
x[0].innerHTML; */
    
/* tb es pot fer

if(window.getcomputedStyle){
    var computedStyle  = getComputedStle(this, null);
}else{ //si es IE -> computedStyle
computedStyle= this.currentStyle;
} */ 
}

