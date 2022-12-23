"use strict";

class RandomValue {
    constructor(){
        this.r = 150;
        this.g = 90;
        this.b = 200;
        this.opacite = 0.5;
        this.radius = 5;
    }
    generateValue() {
        this.r=Math.floor(Math.random()*256);
        this.g=Math.floor(Math.random()*256);
        this.b=Math.floor(Math.random()*256);
        this.opacite=Math.random();
        this.opacite=this.opacite.toFixed(1);
        this.radius= Math.ceil(Math.random()*(50-20))+20;
    }
}
export default RandomValue;