"use strict";

// fonctions appelant AJAX
function appelAjaxHtml() {
    $.get('php/html.php',afficherHtml);
}
function appelAjaxJson() {
    $.get('php/json.php',afficherJson);
}
function appelAjaxPhoto() {
    $.get('php/photos.php',afficherPhotos);
}

// functions callback

function afficherHtml(text) {
    $('#target').html(text);
}

function afficherJson(json) {
    json = JSON.parse(json);
    $('#target').empty();
    $('#target').append('<ul>');
    for(let i=0;i<json.length;i++) {
        $('#target').append('<li> marque : '+json[i]['marque']+' modele : '+json[i]['modele']+' annee : '+json[i]['annee']);
    }
    $('#target').append('</ul>');
}

function afficherPhotos(photo) {
    $('#target').html(photo);
}

document.addEventListener("DOMContentLoaded", function(){
   $('#html').on('click',appelAjaxHtml);
   $('#json').on('click',appelAjaxJson);
   $('#photos').on('click',appelAjaxPhoto);
});