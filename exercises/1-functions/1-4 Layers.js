"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //Layer 1
   context.fillStyle = 'grey';
   context.beginPath();
   context.rect(50, 50, 300, 300);
   context.fill();

   context.lineWidth = '3';
   context.strokeStyle = 'black';
   context.beginPath();
   context.rect(50, 50, 300, 300);
   context.stroke();

   //Layer 2
   context.fillStyle = 'grey';
   context.beginPath();
   context.rect(50, 50, 250, 250);
   context.fill();

   context.lineWidth = '3';
   context.strokeStyle = 'black';
   context.beginPath();
   context.rect(50, 50, 250, 250);
   context.stroke();

   //Layer 3
   context.fillStyle = 'grey';
   context.beginPath();
   context.rect(100, 50, 200, 200);
   context.fill();

   context.lineWidth = '3';
   context.strokeStyle = 'black';
   context.beginPath();
   context.rect(100, 50, 200, 200);
   context.stroke();

   //Layer 4
   context.fillStyle = 'grey';
   context.beginPath();
   context.rect(150, 100, 150, 150);
   context.fill();

   context.lineWidth = '3';
   context.strokeStyle = 'black';
   context.beginPath();
   context.rect(150, 100, 150, 150);
   context.stroke();

   //Layer 5
   context.fillStyle = 'grey';
   context.beginPath();
   context.rect(150, 150, 100, 100);
   context.fill();

   context.lineWidth = '3';
   context.strokeStyle = 'black';
   context.beginPath();
   context.rect(150, 150, 100, 100);
   context.stroke();

}