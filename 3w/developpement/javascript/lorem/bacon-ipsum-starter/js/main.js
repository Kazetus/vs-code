'use strict';
function getBacon(event){
    event.preventDefault();
    $.getJSON('https://baconipsum.com/api/?callback=?', 
        {'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':$('#paragraph').val()}, serveBacon);
}
function serveBacon(bacon){
    $('#getmeat').empty();
    for (let i = 0; i < bacon.length; i++) {
        $('#getmeat').append('<p>'+bacon[i]+'</p>');
    }
}
document.addEventListener('click', function(){
    $('#launchmeat').on('click', getBacon);
});