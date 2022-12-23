"use strict"
class GetPos {
    constructor(){
        this.styleTop;
        this.styleLeft; 
        this.cercle;
        this.x;
        this.y;
        this.posX;
        this.posY;
        this.canvas = document.getElementById("drawing");
    }
    generatePosValue(event) {
        this.styleTop = parseInt(window.getComputedStyle(this.canvas).getPropertyValue("border-top-width"),10);
        this.styleLeft = parseInt(window.getComputedStyle(this.canvas).getPropertyValue("border-left-width"),10);
        this.cercle = this.canvas.getBoundingClientRect();
        this.x = event.clientX; 
        this.y = event.clientY;
        this.posX = this.x-this.cercle.left-this.styleLeft;
        this.posY = this.y-this.cercle.top-this.styleTop;
    }
}
export default GetPos;