"use strict";
import User from "./User.js";

class Admin extends User {
    constructor() {
         super();
    }
    canEditArticles() {
        return true;
    }
}
export default Admin;