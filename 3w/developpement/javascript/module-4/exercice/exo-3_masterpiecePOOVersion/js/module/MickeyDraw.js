"use strict";
import RandomValue from "./RandomValue.js";

class MickeyDraw extends RandomValue {
    constructor() {
        super();
        this.canvas = document.getElementById("drawing");
        this.context = this.canvas.getContext("2d");
        this.value = new RandomValue();
    }
    startDrawMickey(X, Y) {
        this.value.generateValue();
        this.context.beginPath();
        this.context.arc(X, Y, this.value.radius, 0, Math.PI*2);
        this.context.fillStyle = 'rgba('+this.value.r+','+this.value.g+','+this.value.b+',1)';
        this.context.fill();
        this.context.closePath();
        this.context.beginPath();
        this.context.arc(X+this.value.radius, Y-this.value.radius, this.value.radius-30/100*this.value.radius , 0, Math.PI*2);
        this.context.fillStyle = 'rgba('+this.value.r+','+this.value.g+','+this.value.b+','+this.value.opacite+')';
        this.context.fill();
        this.context.closePath();
        this.context.beginPath();
        this.context.arc(X-this.value.radius, Y-this.value.radius, this.value.radius-30/100*this.value.radius , 0, Math.PI*2);
        this.context.fillStyle = 'rgba('+this.value.r+','+this.value.g+','+this.value.b+','+this.value.opacite+')';
        this.context.fill();
        this.context.closePath();
    }
}
export default MickeyDraw;