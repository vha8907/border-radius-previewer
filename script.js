$(document).ready(function(){
    $(".main-box").css("border-radius", "10%");
    $("button").click(function(){
        $(".main-box").css("border-radius", $("#input-box").val());
      });
});

