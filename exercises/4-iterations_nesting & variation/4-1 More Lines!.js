"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = 600;
let height = 300;

fillRect();
function fillRect() {
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);
}

Utils.drawLine(); {
    let step = 10;
    let amountw = width/step;
    let amounth = height/step;
    context.strokeStyle = "white";
    context.lineWidth = "2";

    for (let i = 0; i <= amountw; i++) {
    Utils.drawLine(step * i, 0, width - (step * i), height);
    }

    for (let i = 0; i <= amounth; i++) {
    Utils.drawLine(0, step * i, width, height - (step * i));
    }
}