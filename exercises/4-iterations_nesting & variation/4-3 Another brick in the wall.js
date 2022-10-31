"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawSquares();



function drawSquares() {
    let k = 0;
    for (let i = 0; i < 6; i++) {
        if (15 % i == 0) {
            k = 50;
        } else {
            k = 0;
        }
        for (let j = 0; j < 6; j++) {
        context.fillStyle = "#8c0e00";
        context.fillRect(k+50+j* 105, 50+i * 55, 100, 50);
        }
    }
}