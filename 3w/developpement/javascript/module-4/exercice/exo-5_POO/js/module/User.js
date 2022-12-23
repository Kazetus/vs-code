"use strict";
import Age from "./Age.js";
class User{
     constructor(name, firstName, job, age) {
        this.name = name;
        this.firstName = firstName;
        this.job = job || null;
        this.ageutilisateur = new Age();
        this.ageutilisateur.setAge= age;
     }
    fullName() {
        this.fullname = this.name +" "+ this.firstName;
        return this.fullname;
    }
    set setNewJob(nouveauJob) {
        this.job = nouveauJob;
    }
    get getJob() {
        return this.job;
    }
}
export default User;