"use strict";
import RandomValue from "./RandomValue.js";

class AllDraw extends RandomValue {
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
    startDrawSquare(X, Y) {
        this.value.generateValue();
        this.context.beginPath();
        this.context.fillRect(X,Y,this.value.radius,this.value.radius);
        this.context.fillStyle = 'rgba('+this.value.r+','+this.value.g+','+this.value.b+','+this.value.opacite+')';
        this.context.closePath();
    }
    startDrawSmiley(X, Y) {
        this.context.beginPath();
        this.context.arc(X, Y, 50, 0, Math.PI*2);
        this.context.fillStyle = "Yellow";
        this.context.fill();
        this.context.closePath();
        this.context.beginPath();
        this.context.arc(X+15, Y-20, 5,0, Math.PI*2);
        this.context.fillStyle = "black";
        this.context.fill();
        this.context.closePath();
        this.context.beginPath();
        this.context.arc(X-15, Y-20, 5, 0, Math.PI*2);
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.closePath();
        this.context.beginPath();
        this.context.arc(X, Y+10, 25, 0, 1*Math.PI);
        this.context.fillStyle = 'white';
        this.context.fill();
        this.context.closePath();
    }
}
export default AllDraw;