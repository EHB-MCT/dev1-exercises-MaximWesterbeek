"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

var ballRadius = 10;
var x = width/2;
var y = height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function draw() {
    context.clearRect(0, 0, width, height);
    drawBall();
    
    if (x + dx > width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);