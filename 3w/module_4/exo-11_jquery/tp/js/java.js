$(document).ready(function() {

   $("#afficher").on("click",function() {
        $("#target").toggle("fast");
   });
    $("#color").on("click",function() {
        $("#target").css("color", "green");
    });
    $("#html").on("click",function (){
        $("#target").text("Hello World !");
        $("#target").css("color","blue");
    });
    $("#decalage").on("click",function(){
        $("#target").slideToggle("slow");
    });
});