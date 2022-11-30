"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = 25;
let y = 25;

let dx = 0;
let dy = 0;

drawBall();

function drawBall(){
    dx += 5;
    if (x + dx > width-x || x + dx < x){
        dx = -dx;
    }

    if (y + dy > height-y || y + dy < y) {
        dy = -dy;
    }

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";
    Utils.fillCircle(x+dx, 25, 25);

    requestAnimationFrame(update);
}