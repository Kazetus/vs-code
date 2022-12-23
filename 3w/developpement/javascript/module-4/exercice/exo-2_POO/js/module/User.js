"use strict";
class User{
     constructor() {
        this.job = "dev";
     }
    fullName(name, firstName) {
        this.fullname = name +" "+ firstName;
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