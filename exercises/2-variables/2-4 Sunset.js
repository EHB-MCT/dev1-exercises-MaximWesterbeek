"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let yellow = '#ea9e24';
let orange = '#fc701b';
let red = '#a51f02';
let blue = '#00198d';
let sun = '#ffffc7';

let stretch = 1;
let xtra = 1;

if (stretch < 1) {
    xtra = 1.2;
} else {
    xtra = 1;
}

drawRect();

function drawRect() {
    context.fillStyle = blue;
    context.fillRect(50, 50, 400/stretch, 200*stretch*xtra);

    context.fillStyle = red;
    context.fillRect(50, 50, 400/stretch, 150*stretch*xtra);

    context.fillStyle = orange;
    context.fillRect(50, 50, 400/stretch, 100*stretch*xtra);

    context.fillStyle = yellow;
    context.fillRect(50, 50, 400/stretch, 50*stretch*xtra);

    context.fillStyle = sun;
    context.arc((200/stretch)+50, (150*stretch*xtra)+50, 100/stretch, Math.PI, 2* Math.PI);
    context.fill();
}

console.log(context);

    //context.fillStyle = yellow;
    //context.fillRect(50, 50, 400, 50);
    //context.fillStyle = orange;
    //context.fillRect(50, 100, 400, 50);
    //context.fillStyle = red;
    //context.fillRect(50, 150, 400, 50);
    //context.fillStyle = blue;
    //context.fillRect(50, 200, 400, 50);

    //context.fillStyle = sun;
    //context.arc(250, 200, 100, Math.PI, 2* Math.PI);
    //context.fill();