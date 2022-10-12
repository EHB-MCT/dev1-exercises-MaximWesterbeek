"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

console.log(context);

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 100;
let spacing = 50;

drawLines(width, height);

function drawLines(x, y) {
context.lineWidth = "2";
context.beginPath();
context.moveTo (margin, spacing);
context.lineTo(x-margin, spacing);
context.lineTo(margin, spacing*3);
context.lineTo(x-margin, spacing*3);
context.lineTo(margin, spacing*5);
context.lineTo(x-margin, spacing*5);
context.lineTo(margin, spacing*7);
context.lineTo(x-margin, spacing*7);
context.lineTo(margin, spacing*9);
context.lineTo(x-margin, spacing*9);
context.closePath();
context.stroke();

}