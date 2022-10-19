"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawConcentricCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawConcentricCircles() {
    context.fillStyle = "#AAAAAA";
    context.lineWidth = 2;
    let i = 0;
    while (i < 150) {
        console.log(i);
        let radius = 150-i;
        Utils.fillAndStrokeCircle(200, 200, radius);
        i += 25;
    }
}