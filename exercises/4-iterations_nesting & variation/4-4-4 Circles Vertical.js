"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
    let blue = context.fillStyle = "#7dc4e9";
    let red = context.fillStyle = "#e97d7e";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5; j++) {

            context.fillStyle = red;
            Utils.fillCircle(0+200*j, 0+100*i, 50);

            context.fillStyle = blue;
            Utils.fillCircle(100+200*j, 0+100*i, 50);
        }
    }
}