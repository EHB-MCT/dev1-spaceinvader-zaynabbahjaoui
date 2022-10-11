"use strict";

let canvas = document.querySelector("Canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName() {


context.lineWidth = 150;
context.strokeStyle ='#59ff00';

context.beginPath();
context.lineTo(400,200);
context.lineTo(750,200);
context.stroke();

context.beginPath();
context.lineTo(750,350);
context.lineTo(1100,350);
context.stroke();


context.beginPath();
context.lineTo(1100,200);
context.lineTo(1450,200);
context.stroke();


context.beginPath();
context.lineTo(50,500);
context.lineTo(400,500);
context.stroke();

context.beginPath();
context.lineTo(50,650);
context.lineTo(400,650);
context.stroke();

context.beginPath();
context.lineTo(50,800);
context.lineTo(400,800);
context.stroke();

context.beginPath();
context.lineTo(400,650);
context.lineTo(750,650);
context.stroke();

context.beginPath();
context.lineTo(750,650);
context.lineTo(1100,650);
context.stroke();


context.beginPath();
context.lineTo(1100,650);
context.lineTo(1450,650);
context.stroke();








context.beginPath();
context.lineTo(1450,500);
context.lineTo(1800,500);
context.stroke();

context.beginPath();
context.lineTo(1450,650);
context.lineTo(1800,650);
context.stroke();


context.beginPath();
context.lineTo(1450,800);
context.lineTo(1800,800);
context.stroke();



  

}
