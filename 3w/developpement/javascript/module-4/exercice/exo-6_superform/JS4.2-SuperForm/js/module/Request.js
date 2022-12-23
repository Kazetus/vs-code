"use strict";
import Error from "./Error.js";

class Request {
    constructor(name, mail, age) {
        this.name = name;
        this.mail = mail;
        this.age = age;
        this.error = new Error();
    }
    sendRequest() {
        console.log(this.name.value, this.mail.value, this.age.value);
    }
    set setRequestName(name){
        this.name = name;
        if (this.name.validity.valueMissing ) {
            this.error.errorName(1);
        }
        else if (!isNaN(this.name.value)){
            this.error.errorName(2);
        }
        else {
        }
    }
    set setRequestMail(mail){
        this.mail = mail;
        if (this.mail.validity.valueMissing) {
            this.error.errorMail(1);
        }
        else if (this.mail.validity.typeMismatch  || this.mail.validity.patternMismatch) {
            this.error.errorMail(2);
        }
        else {
        }
    }
    set setRequestAge(age) {
        this.age = age;
        if (this.age.validity.valueMissing) {
            this.error.errorAge(1);
        }
        else if (isNaN(this.age.value)){
            this.error.errorAge(2);
        }
        else {
        }
    }
}
export default Request;