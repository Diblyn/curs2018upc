$(document).ready(function(){
    
   $('input[type=radio]').on("click", function(){
        console.log("hola");
        if ($(this).val()=="busca"){
            $("#nom").hide();
            $("#buscador").show();
            $(".a1").hide();
            $(".a2").show();
        } else{
            $("#buscador").hide();
            $("#nom").show();
            $(".a2").hide();
            $(".a1").show();
        };
   });
});
