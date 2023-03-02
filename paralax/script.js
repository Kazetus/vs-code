const img = document.querySelectorAll('.book');
window.addEventListener('scroll', function() {
    derniere_position_de_scroll_connue = window.scrollY;
    // img.forEach(element => {
    //     element.style.left = (Math.floor(derniere_position_de_scroll_connue / 10)) + '%'
    // })
    for(let i=0; i<img.length;i++){
        img[i].style.left = "calc("+(Math.floor(derniere_position_de_scroll_connue / 10)) + '% - 300px)';
        // img[i].style.borderRadius = (Math.floor(derniere_position_de_scroll_connue /19)) + '%';
        img[i].style.transform = "scale(calc("+(Math.pow((((Math.floor(derniere_position_de_scroll_connue/10))-50)/5), 2))+"% + "+25+"%)) rotate("+(Math.floor(derniere_position_de_scroll_connue / 10))*3.6+'deg)';
    }
});
