"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
    let blue = context.fillStyle = "#7dc4e9";
    let red = context.fillStyle = "#e97d7e";

    for (let column = 0; column < 5; column++) {
        for (let row = 0; row < 5; row++) {

            context.fillStyle = red;
            Utils.fillCircle(0+200*row, 0+200*column, 50);
            Utils.fillCircle(100+200*row, 100+200*column, 50);

            context.fillStyle = blue;
            Utils.fillCircle(0+200*row, 100+200*column, 50);
            Utils.fillCircle(100+200*row, 0+200*column, 50);
        }
    }
}