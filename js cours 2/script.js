let inputValue = "";
let form = document.createElement('form');
let input = document.createElement('input');
input.type = "text";
form.appendChild(input);
document.body.append(form);
let para = document.createElement('p');
document.body.append(para);
form.addEventListener('submit', e =>{
    e.preventDefault()
});