const moncanvas = document.getElementById("canvasDessin");
const context = moncanvas.getContext("2d");


context.moveTo(0,0);
context.lineTo(320,400);
context.strokeStyle = "red";
context.lineWidth = 3;


context.stroke();