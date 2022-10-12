"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

console.log(context);

let size = 50;

drawRect(size/2, size*8);
drawRect(size*1, size*7);
drawRect(size*3/2, size*6);
drawRect(size*2, size*5);
drawRect(size*5/2, size*4);
drawRect(size*3, size*3);
drawRect(size*7/2, size*2);
drawRect(size*4, size);


function drawRect(pos, side) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let colour = "rgb("+ r + "," + g + "," + b +")";

    context.fillStyle = colour;
    context.fillRect(pos, pos, side, side);
}