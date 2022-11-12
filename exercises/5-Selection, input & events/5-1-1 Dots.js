"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillRect(0, 0, width, height);

drawRandomCircles();

function drawRandomCircles() {
    for (let i = 0; i < 10000; i++) {
        let x = Math.random()*width;
        let y = Math.random()*height;
        
        if (x < width/2) {
            context.fillStyle = "#f42101";
        } else {
            context.fillStyle = "#237f00";
        }
        Utils.fillCircle(x, y, 10);
    }
}