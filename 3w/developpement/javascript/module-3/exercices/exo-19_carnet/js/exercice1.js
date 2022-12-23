"use strict";
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let carnet = [];
let i = 0;
let indice;
let prenom;
let nom;
let telephone;
let idcontact;
let etatCivil;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
// Récupération du form
function getInput() {
    if(nom.validity.valueMissing || prenom.validity.valueMissing || telephone.validity.valueMissing || telephone.validity.patternMismatch) {
    }
    else {
        carnet[i]= [];
        carnet[i].push(etatCivil.value);
        carnet[i].push(nom.value.toString());
        carnet[i].push(prenom.value.toString());
        carnet[i].push(telephone.value.toString());
        i++;
        $("#form").toggle();
        $("#form").get(0).reset();
        $('#deploy').addClass('fa-square-plus');
        $('#deploy').removeClass('fa-square-minus');
        writeDom();
        writeMemory();
    }
}
// Ecriture en local
function writeMemory() {
        carnet = JSON.stringify(carnet);
        window.localStorage.setItem("adresse",carnet);
        console.log(carnet);
        carnet = window.localStorage.getItem("adresse");
        carnet = JSON.parse(carnet);
        console.log(carnet);
}
// Ecriture du carnet
function writeDom() {
        $("#carnet").empty();
        $("#carnet").append("<ul>");
        for (let k=0;k<carnet.length;k++) {
            $("#carnet").append("<li><a href=\"#afficher\" data-codecontact=\""+k+"\">"+carnet[k][1]+" "+carnet[k][2]+"</a></li>");
            carnet[k][4] = k;
        }
        $("#carnet").append("</ul>");
        $("a").on("click", detailContact);
        
}
// récupération en local
function getMemory() {
    carnet = window.localStorage.getItem("adresse");
    carnet = JSON.parse(carnet);
    if (carnet===null) {
        i=0;
        carnet=[];
    }
    else{
        i = carnet.length;
    }
    console.log(i);
}
// Affichage des détails d'un contact
function detailContact(){
    $('#contact').show();
    $('#contact').empty();
    indice = this.getAttribute('data-codecontact');
    for (let k=0;k<carnet.length;k++) {
        if (indice==carnet[k][4]) {
                $('#contact').append("<p>"+carnet[k][0]+" "+carnet[k][1]+" "+carnet[k][2]+" "+carnet[k][3]+"</p>");
                $('#contact').append("<p><a href=\"#contact\" id=\"modify\">Modifier le contact</a>"+"    "+"<a href=\"#contact\" id=\"delete\">Supprimer le contact</a></p>");
                idcontact = k;
        }
        else {}
    }
    $("#modify").on("click", modifyForm);
    $("#delete").on("click", deleteContact);
}
// Changement du fonctionnement du formulaire
function modifyForm(){
    $("#getForm").off("click", getInput);
    $("#form").show();
    $('#deploy').addClass('fa-square-minus');
    $('#deploy').removeClass('fa-square-plus');
    writeForm();
    $("#getForm").on("click", modifyContact)
}
// Modification d'un contact
function modifyContact () {
    if(nom.validity.valueMissing || prenom.validity.valueMissing || telephone.validity.valueMissing || telephone.validity.patternMismatch) {
        console.log(telephone.validity.tooShort);
    }
    else {
        console.log(telephone.validity.tooShort);
        carnet[idcontact][0]=etatCivil.value;
        carnet[idcontact][1]=nom.value;
        carnet[idcontact][2]=prenom.value;
        carnet[idcontact][3]=telephone.value;
        writeDom();
        writeMemory();
        $('#getForm').off('click', modifyContact);
        $('#getForm').on('click', getInput);
        $('#form').hide();
        $("#contact").hide();
        $('#deploy').removeClass('fa-square-minus');
        $('#deploy').addClass('fa-square-plus');
    }
}
// Remplissage du formulaire
function writeForm () {
    etatCivil.value=carnet[idcontact][0];
    nom.value=carnet[idcontact][1];
    prenom.value=carnet[idcontact][2];
    telephone.value=carnet[idcontact][3];
}
// Vidage de la mémoire
function removeAll() {
    window.localStorage.clear();
    $('#carnet').empty();
    $('#contact').empty();
    carnet = null;
    carnet = [];
    i= carnet.length;
    $("#form").hide();
    $('#deploy').removeClass('fa-square-minus');
    $('#deploy').addClass('fa-square-plus');
}
// Afficher le formulaire
function displayForm() {
    $("#form").toggle();
    $("#form").get(0).reset();
    $('#contact').hide();
    $('#deploy').toggleClass('fa-square-minus');
    $('#deploy').toggleClass('fa-square-plus');
    $('#getForm').off('click', modifyContact);
    $('#getForm').on('click', getInput);
}
// Supprimer un contact
function deleteContact() {
    carnet.splice(idcontact, 1);
    for (let k=0; k<carnet.length;k++) {
        carnet[k][4]=k;
    }
    i=carnet.length;
    writeDom();
    writeMemory();
    $('#contact').hide();
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    etatCivil= document.getElementById('civil');
    nom= document.getElementById("firstname");
    prenom= document.getElementById("lastname");
    telephone=document.getElementById("phone");
    $("#form").hide();
    $('#contact').hide();
    getMemory();
    writeDom();
    $("#afficher").on("click", displayForm);
    $("#clear").on("click", removeAll);
    $("#getForm").on("click", getInput);
});