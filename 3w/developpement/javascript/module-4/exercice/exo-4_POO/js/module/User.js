"use strict";
class User{
     constructor(name, firstName, job) {
        this.name = name;
        this.firstName = firstName;
        this.job = job || null;
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