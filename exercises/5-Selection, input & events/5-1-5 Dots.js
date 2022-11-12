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

        if ((y > height/4 && y < height*0.75) && (x > width/4 && x < width*0.75)) {
            context.fillStyle = "#fff";
        } else {
            context.fillStyle = "#2202ff";
        }
        Utils.fillCircle(x, y, 10);
    }
}