"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];

setup();
update();

function setup() {
    for (let i = 0; i < 100; i++) {
        let balloon = {
            x: Utils.randomNumber(0, width),
            y: height,
            hue: Utils.randomNumber(0, 60),
            speed: Utils.randomNumber(1 , 10),
            move: function() {
                this.x += Utils.randomNumber(0, 0);
                this.y -= this.speed;
                drawBalloons(this.x, this.y, this.hue);
            }   
        };
        balloons.push(balloon);
    }
}

function update() {
    context.fillStyle = "#add7e5";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < balloons.length; i++) {
        balloons[i].move();
    }
    requestAnimationFrame(update);
}

function drawBalloons(x, y, hue) {
    context.fillStyle = Utils.hsl(hue, 100, 50);
    Utils.fillEllipse(x, y, 20, 40);
    Utils.drawLine(x, y+40, x, y+80);
}