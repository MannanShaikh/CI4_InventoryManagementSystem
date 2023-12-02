
$(document).ready(function(){
    $(".update").hide();
    $(".search").hide();
$( "#togBtn" ).click(function() {

    if($("#togBtn").val() == "on")
    {
        $(".hideshow").hide();
        $(".update").show();
        $(".search").show();
        $(".register").hide();
        $("#togBtn").val("off");
    }
    else if($("#togBtn").val() == "off")
    {
        $(".hideshow").show();
        $(".update").hide();
        $(".search").hide();
        $(".register").show();
        $("#togBtn").val("on");
    }
    else {
        location.reload();
    }
  });
});