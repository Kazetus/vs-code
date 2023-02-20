let solution = window.prompt("saississez un mot a deviner").toLowerCase();
let input;
let output = "";
let wrong = "";
let indice;
let count=0;
let text = document.getElementById("word");
let textw = document.getElementById("wrong")
let btn = document.querySelector("button");
let draw = document.querySelector("canvas");
let context = draw.getContext("2d");
let linebot = {
    color: "#0c0c0c",
    length:5,
    width:300,
    x:50,
    y:380
};
let linevert = {
    color: "#0c0c0c",
    length:300,
    width:5,
    x:100,
    y:80
};
let linetop = {
    color: "#0c0c0c",
    length:5,
    width:150,
    x:100,
    y:80
};
let traverse = {
    color: "#0c0c0c",
    x1:101,
    y1:130,
    x2:150,
    y2:81
};
let rope = {
    color: "#0c0c0c",
    length:50,
    width:5,
    x:250,
    y:80
}
let head = {
    color: "red",
    radius:20,
    x:252,
    y:140
};
let body = {
    color: "#0c0c0c",
    length:100,
    width:5,
    x:250,
    y:160
};
let arm1 = {
    color: "#0c0c0c",
    x1:252,
    y1:210,
    x2:190,
    y2:160
};
let arm2 = {
    color: "#0c0c0c",
    x1:253,
    y1:210,
    x2:310,
    y2:160
};
let leg1 = {
    color: "#0c0c0c",
    x1:252,
    y1:260,
    x2:190,
    y2:310
};
let leg2 = {
    color: "#0c0c0c",
    x1:253,
    y1:260,
    x2:310,
    y2:310
};
for (i= 0; i< solution.length; i++) {
    output += "_";
}
function drawLine(line) {
    context.fillStyle = line.color;
    context.fillRect(line.x,line.y,line.width,line.length);
}
function drawHead() {
    context.beginPath();
    context.fillStyle = head.color;
    context.strokeStyle = head.color;
    context.arc(head.x, head.y, head.radius, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
}
function drawDiag(diag) {
    context.strokeStyle = diag.color;
    context.beginPath();
    context.moveTo(diag.x1, diag.y1);
    context.lineTo(diag.x2, diag.y2);
    context.lineWidth = 5;
    context.stroke();
}
function next_draw() {
    switch(count) {
        case 0:
            drawLine(linebot);
        break;
        case 1:
            drawLine(linevert);
        break;
        case 2:
            drawLine(linetop);
        break;
        case 3:
            drawDiag(traverse);
        break;
        case 4:
            drawLine(rope);
        break;
        case 5:
            drawHead();
        break;
        case 6:
            drawLine(body);
        break;
        case 7:
            drawDiag(arm1);
        break;
        case 8:
            drawDiag(arm2);
        break;
        case 9:
            drawDiag(leg1);
        break;
        case 10:
            drawDiag(leg2);
        break;
    }
    count++;
    console.log(count);
}
function ajoute_lettre(input, indice) {
    let table = output.split('');
    table[indice] = input;
    output = "";
    for( let i= 0; i < table.length; i++) {
        output += table[i];
    }
}
function check_text() {
    input = window.prompt("saississez une lettre").toLowerCase();
    let boolLetter = false;
    for(let i = 0; i < solution.length; i++) {
        if(solution[i] == input) {
            boolLetter = true;
            indice = i;
            ajoute_lettre(input, indice);
        }
    }
    if(!boolLetter){
        if (wrong.length > 0) {
            for (let i = 0; i < wrong.length; i++) {
                if (wrong[i] != input) {
                    wrong += (input);
                }
            }
        }
        else {
            wrong += input;
        }
        next_draw();
        textw.innerHTML = wrong;
    }
    plot_text(output);
    if(count > 10){
        if(window.alert("Vous avez perdu")){
            location.reload();
        }
    }
    else if(output == solution) {
        if(window.alert('Vous avez gagné')){
            location.reload();
        }
    }
}
function plot_text(output) {
    text.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", function() {
    btn.addEventListener("click", check_text);
});

