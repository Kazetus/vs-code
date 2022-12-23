"use strict";

class Error {
    constructor() {
        this.invalid;
        this.name = document.getElementById("name");
        this.mail = document.getElementById('email');
        this.age = document.getElementById('age');
    }
    errorName(type) {
        if (type ===1) {
            this.invalid = document.createElement("span");
            this.invalid.classList.add('form-error');
            this.invalid.appendChild(document.createTextNode("Vous n'avez pas saisi de nom."));
            this.name.after(this.invalid);
        }
        else {
            this.invalid = document.createElement("span");
            this.invalid.classList.add('form-error');
            this.invalid.appendChild(document.createTextNode("Vous n'avez pas saisi un nom en texte."));
            this.name.after(this.invalid);
        }
    }
    errorMail(type) {
        if (type === 1) {
            this.invalid = document.createElement("span");
            this.invalid.classList.add('form-error');
            this.invalid.appendChild(document.createTextNode("Vous n'avez pas saisi d'email."));
            this.mail.after(this.invalid);
        }
        else {
            this.invalid = document.createElement("span");
            this.invalid.classList.add('form-error');
            this.invalid.appendChild(document.createTextNode("Vous n'avez pas respecté le format email.(texte@texte.texte)"));
            this.mail.after(this.invalid);
        }
    }
    errorAge(type) {
        if (type === 1) {
            this.invalid = document.createElement("span");
            this.invalid.classList.add('form-error');
            this.invalid.appendChild(document.createTextNode("Vous n'avez pas saisi d'age."));
            this.age.after(this.invalid);
        }
        else {
            this.invalid = document.createElement("span");
            this.invalid.classList.add('form-error');
            this.invalid.appendChild(document.createTextNode("Vous n'avez pas saisi un nombre."));
            this.age.after(this.invalid);
        }
    }
}
export default Error;