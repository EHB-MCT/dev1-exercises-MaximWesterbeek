"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

fillCanvas();
function fillCanvas() {
    context.fillRect(0, 0, width, height);
}

drawDiamond();
function drawDiamond() {
    let size = width/2.25;
    context.strokeStyle = "white";
    context.lineWidth = size;
    Utils.drawLine(width/3, height/3, width-(width/3), height-(height/3));
}