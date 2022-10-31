"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let colour = "hsla(200, 70%, 70%, 0.5)";
            context.fillStyle = colour;
            
            Utils.fillCircle(0+100*j, 0+100*i, Math.random()*90);
        }
    }
}