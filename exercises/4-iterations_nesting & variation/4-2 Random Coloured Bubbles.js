"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width-400;
let height = context.canvas.height-400;

fillRect();
function fillRect() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width+400, height+400);
}


Utils.fillAndStrokeCircle(); {
    context.strokeStyle = "transparent";
    
    for (let i = 0; i < 150; i++) {
        let h = Math.floor(Math.random() * 185);
        let colour = "hsla("+ h +", 100%, 50%, 0.5";
        context.fillStyle = colour;

        Utils.fillAndStrokeCircle(Math.random()*width+200, Math.random()*height+200, Math.random()*60);
        console.log(i);
    }
}

