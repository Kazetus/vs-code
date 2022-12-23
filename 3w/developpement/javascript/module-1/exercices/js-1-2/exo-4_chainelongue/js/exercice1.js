let phrases = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, fuga.","Impedit, eaque aspernatur itaque temporibus dolor error molestias repellendus nulla.","Corrupti, impedit, aliquam et nihil consectetur quaerat magnam nesciunt deleniti.","Molestiae sint quod recusandae fugiat! Quaerat, saepe magni harum voluptas."];
let length = [];
let result;
let longest = 0;
let position;
document.write("<p>voici une liste de phrases:</p><ul>");
for (let i=0;i<phrases.length;i++) {
    document.write("<li>"+phrases[i]+"</li>");
}
document.write("</ul><p>Voici le nombre de caratères des phrases:</p><ul>");
for (let i=0;i<phrases.length;i++) {
    document.write("<li>"+phrases[i].length+"</li>");
    length.push(phrases[i].length);
}
console.log(length);
for(let i=0;i<length.length;i++) {
    if(longest < length[i]) {
        longest = length[i];
        position=i;
        console.log(longest, position);
    }
    else {}
}
document.write("</ul><p>La phrase la plus longue et son nombre de caractères sont: </p><ul><li>"+phrases[position]+"</li><li>"+length[position]+"</li>");