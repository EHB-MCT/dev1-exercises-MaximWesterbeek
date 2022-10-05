"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //Achtergrond
   context.fillStyle = 'orange';
   context.beginPath();
   context.rect(50, 50, 300, 300);
   context.fill();

   //Witte lijnen linksboven --> rechtsonder
   context.strokeStyle = 'white';
   context.lineWidth = '6';

   context.beginPath();
   context.moveTo(50, 100);
   context.lineTo(300, 350);
   context.stroke();

   context.beginPath();
   context.moveTo(50, 75);
   context.lineTo(325, 350);
   context.stroke();

   context.beginPath();
   context.moveTo(50, 50);
   context.lineTo(350, 350);
   context.stroke();

   context.beginPath();
   context.moveTo(75, 50);
   context.lineTo(350, 325);
   context.stroke();

   context.beginPath();
   context.moveTo(100, 50);
   context.lineTo(350, 300);
   context.stroke();

   //Witte lijnen linksonder --> rechtsboven
   context.beginPath();
   context.moveTo(50, 300);
   context.lineTo(300, 50);
   context.stroke();

   context.beginPath();
   context.moveTo(50, 325);
   context.lineTo(325, 50);
   context.stroke();

   context.beginPath();
   context.moveTo(50, 350);
   context.lineTo(350, 50);
   context.stroke();

   context.beginPath();
   context.moveTo(75, 350);
   context.lineTo(350, 75);
   context.stroke();

   context.beginPath();
   context.moveTo(100, 350);
   context.lineTo(350, 100);
   context.stroke();

   context.strokeStyle = 'orange';
   context.lineWidth = '8';
   context.beginPath();
   context.rect(50, 50, 300, 300);
   context.stroke();

   //Middenrechthoek
   context.fillStyle = 'orange';
   context.translate(200, 200);
   context.rotate(90*Math.PI/180);
   context.beginPath();
   context.rect(50, 50, 50, 50);
   context.fill();

}