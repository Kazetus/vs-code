let inputValue = "";
let form = document.createElement('form');
let input = document.createElement('input');
input.type = "text";
form.appendChild(input);
document.body.append(form);
let para = document.createElement('p');
document.body.append(para);
form.addEventListener('submit', e =>{
<<<<<<< Updated upstream
    e.preventDefault()
    inputValue = input.value;
    para.innerHTML = inputValue;
});
const maDiv = document.getElementById('maDiv');
const btn = document.getElementById('btn')
btn.addEventListener('click', e => {
    maDiv.classList.toggle('active');
=======
    e.preventDefault();
    inputValue = input.value;
    para.innerHTML = inputValue;
>>>>>>> Stashed changes
});