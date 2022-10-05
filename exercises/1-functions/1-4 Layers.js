"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.fillStyle = 'lightBlue';
   context.lineWidth = '3';

   //Layer 1
   context.beginPath();
   context.rect(50, 50, 300, 300);

   //Layer 2
   context.rect(50, 50, 250, 250);

   //Layer 3
   context.rect(100, 50, 200, 200);

   //Layer 4
   context.rect(150, 100, 150, 150);

   //Layer 5
   context.rect(150, 150, 100, 100);
   context.fill();
   context.stroke();
   
}