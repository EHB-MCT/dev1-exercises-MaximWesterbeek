"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = changeColour;

let frameCount = 0;

let hueShift = 0;

drawBubbles();

function drawBubbles(){

    if (frameCount % 24 == 0) {
        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);
        let radius = Utils.randomNumber(5, 100);
        let hue = Utils.randomNumber(0+hueShift, 50+hueShift);

        drawBubble(x, y, radius, hue);
    }

    frameCount++;
    requestAnimationFrame(drawBubbles);
}

function drawBubble(x, y, radius, hue) {

    context.fillStyle = Utils.hsl(hue, 50, 50);
    Utils.fillCircle(x, y, radius);

    context.fillStyle = Utils.hsl(hue, 50, 75);
    Utils.fillCircle(x + radius/2, y - radius/3, radius/4);

}


/**
 * 
 * @param {MouseEvent} eventData
 */
function changeColour(eventData){
    hueShift = eventData.pageX / 5;
}





