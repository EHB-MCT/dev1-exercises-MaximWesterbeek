"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let stretch = 100;
let grey = '#2d3e50';
let blue = '#3598db';
let lightGrey = '#ecf0f1';
let red = '#e84c3d';

drawRect();

function drawRect() {
    context.fillStyle = grey;
    context.fillRect(50, 50, stretch*3, 200);
    context.fillStyle = blue;
    context.fillRect(50, 250, stretch*3, 100);
    context.fillStyle = lightGrey;
    context.fillRect(50, 50, stretch*2, 300);
    context.fillStyle = grey;
    context.fillRect(50, 50, stretch, 200);
    context.fillStyle = blue;
    context.fillRect(50, 250, stretch, 100);
    context.fillStyle = red;
    context.fillRect(50, 100, stretch*3, 100);
}

console.log(context);