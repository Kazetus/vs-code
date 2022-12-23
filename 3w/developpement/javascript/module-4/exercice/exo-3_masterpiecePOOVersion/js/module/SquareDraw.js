"use strict";
import RandomValue from "./RandomValue.js";

class SquareDraw extends RandomValue {
    constructor() {
        super();
        this.canvas = document.getElementById("drawing");
        this.context = this.canvas.getContext("2d");
        this.value = new RandomValue();
    }
    startDrawSquare(X, Y) {
        this.value.generateValue();
        this.context.beginPath();
        this.context.fillRect(X,Y,this.value.radius,this.value.radius);
        this.context.fillStyle = 'rgba('+this.value.r+','+this.value.g+','+this.value.b+','+this.value.opacite+')';
        this.context.closePath();
    }
}
export default SquareDraw;