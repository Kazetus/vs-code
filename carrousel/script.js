let nbr = 6;
let p=0;
container = document.getElementById('container');
g = document.getElementById('g');
d = document.getElementById('d');
container.style.width=(1200*nbr)+"px";
for(let i=1; i<=nbr;i++) {
    div = document.createElement('div');
    div.className = "photo";
    div.style.backgroundImage="url('img/img"+i+".jpg')";
    container.appendChild(div);
}
g.addEventListener("click", function(){
    if( p == -nbr+1) {
        p = 0;
    } else {
        p--;
    }
    TranslateImage()
});
d.addEventListener("click", function(){
    if( p == 0) {
        p = -5;
    } else {
        p++;
    }
    TranslateImage()
});
function TranslateImage() {
    container.style.transform="translate("+p*1200+"px)";
}