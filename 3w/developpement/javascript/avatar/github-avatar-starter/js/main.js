'use strict';

function searchUser(event){
    event.preventDefault();
    let search = $.ajax({
                            type:"get",
                            url:'https://api.github.com/users/'+$('#name').val(),
                        });
    search.done(displayUser);
    search.fail(notFound);
    
}
function displayUser(user){
    $('.displayer').html('<a href="'+user['html_url']+'"><img src="'+user['avatar_url']+'"/></a>')
}
function notFound(){
    $('.displayer').html('Utilisateur non trouvé.');
}
document.addEventListener('DOMContentLoaded', function(){
   $('#getuser').on('click', searchUser); 
});