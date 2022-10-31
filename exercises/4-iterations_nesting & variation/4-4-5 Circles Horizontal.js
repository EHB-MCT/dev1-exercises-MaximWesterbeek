"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
    let blue = context.fillStyle = "#7dc4e9";
    let red = context.fillStyle = "#e97d7e";

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {

            context.fillStyle = red;
            Utils.fillCircle(0+100*j, 0+200*i, 50);

            context.fillStyle = blue;
            Utils.fillCircle(0+100*j, 100+200*i, 50);
        }
    }
}