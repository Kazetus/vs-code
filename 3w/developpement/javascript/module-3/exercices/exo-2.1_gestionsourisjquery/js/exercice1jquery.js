"use strict";
$('#toggle-rectangle').on("click", function() {
   $("div").toggle(".rectangle"); 
});
$('div').hover(
    function() {
        $(this).toggleClass("important"); },
    function() {
        $(this).removeClass("important good"); }
    );
$('div').on("dblclick", function(){
    $(this).toggleClass("good");
});