"use strict";

class Age {
    construtor(){
        this.age = 10;
    }
    get getAge() {
        if( this.age<0 || this.age>118 || isNaN(this.age)){
            return null;
        }
        else {
            return this.age;
        }
    }
    set setAge(userAge) {
        this.age = userAge;
    }
}
export default Age;