"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //Red box upper left
   context.lineWidth = 2;
   context.strokeStyle = 'red';
   context.beginPath();
   context.rect(50, 50, 150, 150);
   context.stroke();

   //Red box lower right
   context.beginPath();
   context.rect(200, 200, 150, 150);
   context.stroke();
   
   //Red box small upper right
   context.beginPath();
   context.rect(275, 75, 50, 50);
   context.stroke();
   
   //Red box small lower left
   context.beginPath();
   context.rect(75, 275, 50, 50);
   context.stroke();


   //Black full box middle
   context.lineWidth = 2;
   context.strokeStyle = 'black';
   context.beginPath();
   context.rect(125, 125, 150, 150);
   context.fill();

    //Red outline of "Black full box middle"
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.stroke();

   //Black full box small upper right
   context.beginPath();
   context.rect(325, 50, 25, 25);
   context.fill();

   //Black full box small lower left
   context.beginPath();
   context.rect(50, 325, 25, 25);
   context.fill();
   

}