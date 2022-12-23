"use strict";

class Resolve {
    constructor(){
        this.node = document.getElementsByClassName("form-error");
    }
    removeError(){
        console.log(this.node);
        if(this.node != undefined) {
            for(let i=0;i<this.node.length;i++) {
                console.log(this.node);
                this.node[i].parentNode.removeChild(this.node[i]);
                i--;
            }
        }
        else {
            
        }
    }
}
export default Resolve;