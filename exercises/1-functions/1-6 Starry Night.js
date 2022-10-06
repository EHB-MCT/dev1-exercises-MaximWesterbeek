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
   //-2
   context.beginPath();
   context.moveTo(50, 125);
   context.lineTo(300, 375);
   //-1
   context.moveTo(50, 87.5);
   context.lineTo(325, 362.5);
   //0
   context.moveTo(50, 50);
   context.lineTo(350, 350);
   //1
   context.moveTo(87.5, 50);
   context.lineTo(362.5, 325);
   //2
   context.moveTo(125, 50);
   context.lineTo(375, 300);

   //Witte lijnen linksonder --> rechtsboven
   //-2
   context.moveTo(50, 275);
   context.lineTo(275, 50);
   //-1
   context.moveTo(50, 312.5);
   context.lineTo(312.5, 50);
   //0
   context.moveTo(50, 350);
   context.lineTo(350, 50);
   //1
   context.moveTo(87.5, 350);
   context.lineTo(350, 87.5);
   //2
   context.moveTo(125, 350);
   context.lineTo(350, 125);
   context.stroke();

   //White corner circles
   context.fillStyle = 'white';
   context.beginPath();
   //L-up
   context.moveTo(50, 50);
   context.arc(50,50,150,0,Math.PI/2);
   //L-down
   context.moveTo(50, 350);
   context.arc(50,350,150,10.995,(Math.PI*2));
   //R-up
   context.moveTo(350, 50);
   context.arc(350,50,150,89.54,(Math.PI));
   //R-down
   context.moveTo(350, 350);
   context.arc(350,350,150,9.423,(Math.PI)+(Math.PI/2));
   context.fill();

   //Orange frame
   context.strokeStyle = 'orange';
   context.lineWidth = '8';
   context.beginPath();
   context.rect(50, 50, 300, 300);
   context.stroke();

   //Middle square
   context.strokeStyle = 'orange';
   context.lineWidth = '8';
   context.beginPath();
   context.moveTo(216.5, 183);
   context.lineTo(183, 216.5);

   context.moveTo(183.4, 183.4);
   context.lineTo(216.6, 216.6);
   context.stroke();

   //"STARRY NIGHT"
   context.beginPath();
   context.fillStyle = 'orange';
   context.font = '40.5px arial';
   context.fillText('STARRY NIGHT', 52, 390);
}