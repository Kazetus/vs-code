"use strict";

import Request from "./module/Request.js";
import Resolve from "./module/Resolve.js";
let contact =[];
let newcontact;
let name;
let mail;
let age;
let spanCheck;
let link;
let idcontact;
let request;
// FONCTIONS
function getRequest() {
    event.preventDefault();
    spanCheck = new Resolve();
    spanCheck.removeError();
    request = new Request(name,mail,age);
    if (name.validity.valueMissing || !isNaN(this.name.value) || mail.validity.valueMissing || mail.validity.typeMismatch || mail.validity.patternMismatch || age.validity.valueMissing || isNaN(age.value)) {
        request.setRequestName = name;
        request.setRequestAge = age;
        request.setRequestMail = mail;
    }
    else {
        newcontact = {
        "Name": name.value,
        "Mail": mail.value,
        "Age": age.value
        };
        console.log(newcontact);
        contact.push(newcontact);
        storageLocal();
    }
}
function storageLocal(){
    contact = JSON.stringify(contact);
    window.localStorage.setItem("carnet", contact);
    contact = JSON.parse(contact);
    displayContact();
}
function modifyForm(){
    $("#submit").off("click", getRequest);
    $("#form").show();
    writeForm();
    $("#submit").on("click", modifyContact)
}
function writeForm () {
    name.value=contact[idcontact].Name;
    mail.value=contact[idcontact].Mail;
    age.value=contact[idcontact].Age;
}
function displayContact(){
    $('#contact').show();
    $("#contact").empty();
    $("#contact").append("<ul>");
    for (let i=0;i<contact.length;i++) {
        $("#contact").append("<li><a href=\"#contact\" data-codecontact=\""+i+"\">"+contact[i].Name+"</a></li>");
        contact[i].id = i;
    }
    $("#contact").append("</ul>");
    $("a").on("click", displayDetail);
}
function displayDetail() {
    $('#detail').show();
    $('#detail').empty();
    link = this.getAttribute('data-codecontact');
    for (let k=0;k<contact.length;k++) {
        if (link==contact[k].id) {
                $('#detail').append("<p>"+contact[k].Name+" "+contact[k].Mail+" "+contact[k].Age+"</p>");
                $('#detail').append("<p><a href=\"#contact\" id=\"modify\">Modifier le contact</a>"+"    "+"<a href=\"#contact\" id=\"delete\">Supprimer le contact</a></p>");
                idcontact = k;
        }
        else {}
    }
    $("#modify").on("click", modifyForm);
    $("#delete").on("click", deleteContact);
}
function modifyContact() {
    event.preventDefault;
    spanCheck = new Resolve();
    spanCheck.removeError();
    request = new Request(name,mail,age);
    if (name.validity.valueMissing || !isNaN(this.name.value) || mail.validity.valueMissing || mail.validity.typeMismatch || mail.validity.patternMismatch || age.validity.valueMissing || isNaN(age.value)) {
        request.setRequestName = name;
        request.setRequestAge = age;
        request.setRequestMail = mail;
    }
    else {
        contact[idcontact].Name=name.value;
        contact[idcontact].Mail=mail.value;
        contact[idcontact].Age=age.value;
        $('#submit').off('click', modifyContact);
        $('#submit').on('click', getRequest);
        storageLocal();
        $('detail').hide();
    }
}
function deleteContact() {
    contact.splice(idcontact, 1);
    for (let k=0; k<contact.length;k++) {
        contact[k].id=k;
    }
    storageLocal();
    $('#detail').hide();
}
function removeSpan(){
    spanCheck = new Resolve();
    spanCheck.removeError();
}
// Code principal
document.addEventListener("DOMContentLoaded", function () {
    name = document.getElementById('name');
    mail = document.getElementById('email');
    age = document.getElementById('age');
    contact = window.localStorage.getItem("carnet");
    name.addEventListener("input",removeSpan);
    mail.addEventListener("input",removeSpan);
    age.addEventListener("input",removeSpan);
    $('#contact').hide();
    $('#detail').hide();
    if(contact == null)
    {
        contact = [];
    }
    else
    {
        contact = JSON.parse(contact);
        displayContact();
    }
    $('#submit').on("click", getRequest);
});


