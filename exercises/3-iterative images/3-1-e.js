"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 160) {
        console.log(i);
        Utils.drawLine(50+i, 200+i, 200+i, 50+i);
        Utils.drawLine(50+i, 200-i, 200+    i, 350-i);
        i += 25;
    }
}