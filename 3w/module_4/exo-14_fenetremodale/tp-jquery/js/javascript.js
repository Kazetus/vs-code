$(document).ready(function() {
    $('#window').hide();
    $("#open").on("click",function() {
        $("#window").show("fast");
   });
    $("#close").on("click",function() {
        $("#window").hide("fast");
    });
});