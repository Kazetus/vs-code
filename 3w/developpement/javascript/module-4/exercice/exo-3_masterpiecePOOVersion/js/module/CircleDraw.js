"use strict";
import RandomValue from "./RandomValue.js";

class CircleDraw extends RandomValue {
    constructor() {
        super();
        this.canvas = document.getElementById("drawing");
        this.context = this.canvas.getContext("2d");
        this.value = new RandomValue();
    }
    startDrawCircle(X, Y) {
        this.value.generateValue();
        this.context.beginPath();
        this.context.arc(X, Y, this.value.radius, 0, Math.PI*2);
        this.context.fillStyle = 'rgba('+this.value.r+','+this.value.g+','+this.value.b+','+this.value.opacite+')';
        this.context.fill();
        this.context.closePath();
    }
}
export default CircleDraw;