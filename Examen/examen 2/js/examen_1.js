$(document).ready(function(){
    $("#formulario").on("keyUp",function(){
    //agafem el valor del que hi ha al formulari i ho posem tot en minúscules
    var str = $("@formulario").val().toLowerCase();
    Console.log("str");
    // fem array per paraules que hi ha a str
    var res = str.split(" ");
    Console.log("res");
    // posem en variable array les paraules prohibides
    var prohibit = ["llimona","taronja","poma"];
    // fem contador d'arrays en res
    var longitud = res.length;
    var contador=0;
        while (contador<longitud && res[contador]!="$"){
            //condicional si surt alguna d'aquestes paraules
            if (prohibit.indexOf(str) != -1) {
                //alert
                alert("Texto encontrado");
                //que no possi res
                $("#formulario").innerHTML = ""
            }
            else{
            }
        };
    });
});
