"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //Lucht
   context.fillStyle = 'orange';
   context.beginPath();
   context.rect(50, 50, 300, 300);
   context.fill();

   //Zon
   context.beginPath();
   context.fillStyle = 'yellow';
   context.arc(200, 250, 100, 0, 2* Math.PI);
   context.fill();
   
   //Zee
   context.beginPath();
   context.fillStyle = 'blue';
   context.rect(50, 250, 300, 100);
   context.fill();

}