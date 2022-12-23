// en JS 
//1- déclarer les variables 
//2- séléctionner l'element 
//3- installer l'event 

// en jquery 
// $("selecteur").on(event,fnct à lancer)
$('#saisie').on("click", function(){
   $('#afficher').html("<strong>"+prompt("Veuillez saisir votre message")+"</strong>"); 
});
$('#changeColor').on("click", function(){
    $('div').css("background-color", "#F89");
})