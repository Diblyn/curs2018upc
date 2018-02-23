$(document).ready(function(){
    $("a").on("click",function(){
//        $('#adicional').toggleClass('visible');
        $("#adicional")
            .show()
            .css("color", "red");
//      $("#adicional").css("color", "red");
    //  $("a").hide(); o tb es posa:
        $("#enlace").hide();
    });
});
