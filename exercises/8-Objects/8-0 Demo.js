"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let ghosts = [];

setup();
update();

function setup() {
    for (let i = 0; i < 100; i++) {
        let ghost = {
            x: Utils.randomNumber(0, width),
            y: Utils.randomNumber(0, height),
            hue: Utils.randomNumber(0, 360),
            move: function() {
                this.x += Utils.randomNumber(-2, 2);
                this.y += Utils.randomNumber(-2, 2);
                drawGhost(this.x, this.y, this.hue);
            }   
        };
        ghosts.push(ghost);
    }
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].move();
    }
    requestAnimationFrame(update);
}

function drawGhost(x, y, hue) {
    context.fillStyle = Utils.hsl(hue, 100, 50);
    context.beginPath();
    context.moveTo(x, y + 10);
    context.lineTo(x - 10, y);
    context.lineTo(x - 20, y + 10);
    context.ellipse(x, y, 20, 40, 0, Math.PI, Math.PI * 2);
    context.lineTo(x + 20, y + 10);
    context.lineTo(x + 10, y);
    context.lineTo(x, y + 10);
    context.fill();
    context.fillStyle = "white";
    Utils.fillCircle(x - 7, y - 20, 5, 5);
    Utils.fillCircle(x + 7, y - 20, 5, 5);
    context.fillStyle = "black";
    Utils.fillCircle(x - 7, y - 20, 2, 2);
    Utils.fillCircle(x + 7, y - 20, 2, 2);
}