"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

setup();
draw();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
}

let xPos = [];
let xSpeeds = [];


function draw() {
    let space = height / 5;
    drawTrack(width, space);
    drawSnail(space / 2, space / 2, space, 1);
    drawSnail(space / 2, (space / 2)*3, space, 1);
}

function drawTrack(x, y) {

    context.fillStyle = "grey";
    context.fillRect(0, 0, x, y);
    context.fillRect(0, y*2, x, y);
    context.fillRect(0, y*4, x, y);

    context.fillStyle = "lightgrey";
    context.fillRect(0, y, x, y);
    context.fillRect(0, y*3, x, y);

}

function drawSnail(x, y, sizeY, number) {

    for (let i = 0; i < 5; i++) {
        
    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
        for (let i = 0; i < 5; i++) {
            context.beginPath();
            context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
            context.fill();
            context.stroke();
        }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
    }
}
