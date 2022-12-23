"use strict";
let myInterval;
// fonctions AJAX
function onAppelAjax(){
    $.get('php/ajax.php', afficherComments);   
}
function onChercheAjax(){
    let search = $('#search').val();
    console.log(search);
    if (search.length > 0) {
        $.get('php/search.php','search='+search, afficherArticle);
    }
    else {
        $.get('php/search.php','search=%', afficherArticle);
    }
}
// fonctions affichage
function afficherComments(comment){
    comment= JSON.parse(comment);
    console.log(comment);
    $('#lastcomment').empty();
    if (comment.length>=5){
        for(let i=0;i<5;i++) {
            $('#lastcomment').append('<div><p class="commenttitle"><a href="article.php?id_article='+comment[i]['ID_article']+'">'+comment[i]['articleTitle']+'</a></p><p class="commentuser">'+comment[i]['commentUser']+'</p><p>'+comment[i]['commentText']+'</p><p class="commentdate">'+comment[i]['commentDate']+'</p></div>');
        }
    }
    else {
        for(let i=0;i<comment.length;i++) {
            $('#lastcomment').append('<div><p class="commenttitle">'+comment[i]['articleTitle']+'</p><p class="commentuser">'+comment[i]['commentUser']+'</p><p>'+comment[i]['commentText']+'</p><p class="commentdate">'+comment[i]['commentDate']+'</p></div>');
        }
    }
}

function afficherArticle(articles){
    console.log(articles);
    articles= JSON.parse(articles);
    $('#article').empty();
    console.log(articles);
    for (let i=0; i<articles.length;i++){
    $('#article').append(
                        `<article id="article" class="row">
        <div class="col-3">
            <a href="article.php?id_article=`+articles[i]['ID_article']+`"><img class="miniature" src="img/`+articles[i]['image']+`"/></a>
        </div>
        <div class="col-9">
            <h2>`+articles[i]['articleTitle']+`</h2>
            <p>`+articles[i]['articleText'].substring(0, 300)+`</p>
            <p><a class="btn btn-primary" href="article.php?id_article=`+articles[i]['ID_article']+`">En savoir plus</a></p>
            <p><em>Rédigé par `+articles[i]['authorFirstName']+articles[i]['authorLastName']+`, le `+articles[i]['articleDate']+`</em></p>
        </div>
    </article>`
    );
    }
}

// Code principal
document.addEventListener("DOMContentLoaded", function(){
    onAppelAjax();
    myInterval = setInterval(onAppelAjax, 10000);
    $('#search').on('input', onChercheAjax);
});