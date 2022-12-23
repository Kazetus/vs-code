"use stric";
import AllDraw from "./AllDraw.js";

class RandomDraw extends AllDraw {
    constructor() {
        super();
        this.randomize;
        this.draw= new AllDraw();
    }
    startDrawRandom(X, Y){
        this.randomize = Math.floor(Math.random()*4);
        if(this.randomize===0){
            this.draw.startDrawCircle(X,Y);
        }
        else if(this.randomize===1){
            this.draw.startDrawMickey(X,Y);
        }
        else if(this.randomize===2){
            this.draw.startDrawSquare(X,Y);
        }
        else {
            this.draw.startDrawSmiley(X,Y);
        }
    }
}
export default RandomDraw;