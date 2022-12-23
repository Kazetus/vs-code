// Variables
let btnOpen;
let btnClose;
let fenetre;
// fonction
function openWindow() {
    fenetre.classList.remove('disabled');
}
function closeWindow() {
    fenetre.classList.add('disabled');
}
// Code principal
document.addEventListener("DOMContentLoaded", function() {
   btnOpen = document.getElementById('open');
   btnClose = document.getElementById('close');
   fenetre = document.getElementById('window');
   
   btnOpen.addEventListener('click', openWindow);
   btnClose.addEventListener('click', closeWindow);
});