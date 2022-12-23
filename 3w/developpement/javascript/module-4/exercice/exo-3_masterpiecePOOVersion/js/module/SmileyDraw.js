"use strict";
class SmileyDraw {
    constructor() {
        this.canvas = document.getElementById("drawing");
        this.context = this.canvas.getContext("2d");
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
export default SmileyDraw;