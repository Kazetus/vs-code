"use strict";
let user;
let result;
do {
  user = parseInt(prompt("saississez un nombre"), 10);
}
while(isNaN(user));
document.write("<table> <tbody>");
document.write("<tr>");
for (let i=1; i<=user; i++) {
  document.write("<td> Table de "+i+"</td>");
}
document.write("</tr>");
for (let i=1; i<=user; i++) {
  document.write("<tr>");
  for (let j=1; j<=user; j++) {
    result= i*j;
    if (i===j) {
    document.write("<td class=\"color\">"+i+" x "+j+" = "+result+"</td>");
    }
    else {
    document.write("<td>"+i+" x "+j+" = "+result+"</td>");
    }
  }
  document.write("</tr>");
}
document.write("</tbody> </table>");