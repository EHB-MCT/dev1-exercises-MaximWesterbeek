"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
context.fillRect(0, 0, width, height);

drawLines();

function drawLines() {
    context.lineWidth = "5";

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let r = Math.round(Math.random()*2);

            let h = Math.floor(Math.random() * 360);
            let colour = "hsl("+ h +", 50%, 50%";
            context.strokeStyle = colour;

            if (r == 0) {
            Utils.drawLine(-2+i*10, -2+j*10, 11+i*10, 11+j*10);
            } else {
            Utils.drawLine(-2+i*10, 11+j*10, 11+i*10, -2+j*10);
            }
        }
    }
}