"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //M
   context.lineWidth = 10;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(50, 300);
   context.lineTo(50, 50);
   context.lineTo(150, 150);
   context.lineTo(250, 50);
   context.lineTo(250, 300);
   context.stroke();

   //A
   context.lineWidth = 10;
   context.strokeStyle = 'orange';
   context.beginPath();
   context.moveTo(300, 300);
   context.lineTo(380, 150);
   context.lineTo(460, 300);
   context.lineTo(420, 225);
   context.lineTo(340, 225);
   context.stroke();

   //X
   context.lineWidth = 10;
   context.strokeStyle = 'lightblue';
   context.beginPath();
   context.moveTo(500, 300);
   context.lineTo(610, 147);
   context.stroke();
  
   context.beginPath();
   context.moveTo(610, 300);
   context.lineTo(500, 147);
   context.stroke();

   //i
   context.lineWidth = 10;
   context.strokeStyle = 'blue';
   context.beginPath();
   context.moveTo(655, 300);
   context.lineTo(655, 175);
   context.stroke();

   context.beginPath();
   context.moveTo(655, 150);
   context.lineTo(655, 160);
   context.stroke();

   //M
   context.lineWidth = 10;
   context.strokeStyle = 'lightgreen';
   context.beginPath();
   context.moveTo(705, 300);
   context.lineTo(705, 150);
   context.lineTo(765, 200);
   context.lineTo(830, 150);
   context.lineTo(830, 300);
   context.stroke();

   //White line to cut off upper and lower parts of the letters, looks cleaner
   context.lineWidth = 10;
   context.strokeStyle = 'white';
   context.beginPath();
   context.moveTo(30, 303);
   context.lineTo(850, 303);
   context.stroke();

   context.beginPath();
   context.moveTo(270, 145);
   context.lineTo(850, 145);
   context.stroke();

}