"use strict";
let note = [
    {eleve:"Niles", math:10, algorithme:14, fichiers:9, statistique:12, français:6},
    {eleve:"Cynthia", math:8, algorithme:19, fichiers:15, statistique:2, français:20},
    {eleve:"Toms", math:13, algorithme:10, fichiers:17, statistique:13, français:15},
    {eleve:"Peter", math:15, algorithme:19, fichiers:2, statistique:16, français:7}
    ];
let moyenne;
document.write("<table><tbody>");
document.write("<tr><td>eleve</td><td>math</td><td>algorithme</td><td>fichiers</td><td>statistique</td><td>français</td><td>moyenne</td></tr><tr>");
for (let i=0;i<note.length;i++){
    document.write("<tr><td>"+note[i].eleve+"</td><td>"+note[i].math+"</td><td>"+note[i].algorithme+"</td><td>"+note[i].fichiers+"</td><td>"+note[i].statistique+"</td><td>"+note[i].français+"</td>");
    moyenne= note[i].math*3+note[i].algorithme*5+note[i].fichiers*3+note[i].statistique*3+note[i].français*2;
    moyenne= moyenne/16;
    note[i].moyenne= moyenne;
    console.log(note[i]);
    document.write("<td>"+moyenne+"</td></tr>");
}
document.write("</tbody></table>");