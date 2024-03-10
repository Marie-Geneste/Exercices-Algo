//décommenter-commenter la fonction que vous souhaitez voir !


const moncanvas = document.getElementById("canvasDessin");
const context = moncanvas.getContext("2d");

function drawLine(x1, y1, x2, y2, widthLine, colorLine){
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.strokeStyle = colorLine;
    context.lineWidth = widthLine;
    context.stroke();
}

//for(i=0; i<=400; i+=5)
//drawLine(0, i, 320, 400, 2, "black");

function drawSquare(x, y, c, widthLine, colorLine) {
    context.moveTo(x,y);
    context.lineTo(x+c,y);
    context.moveTo(x+c,y);
    context.lineTo(x+c,y+c);
    context.moveTo(x+c,y+c);
    context.lineTo(x,y+c);
    context.moveTo(x,y+c);
    context.lineTo(x,y);

    context.strokeStyle = colorLine;
    context.lineWidth = widthLine;
    context.stroke();
}

//drawSquare(10, 10, 20, 1, "#000000");


//Il existait en fait des méthodes pour faire des carrés pleins (fillRect) et des carrés vides (strokeRect)
// context.fillStyle = "yellow";
// context.fillRect(50, 50, 120, 10);
// context.strokeStyle = "blue";
// context.strokeRect(60, 70, 50, 50);


function drawGrid(x, y) {
    const step = 25;
    for (let ix = 0; ix < x; ix++) {
        for (let iy = 0; iy < y; iy++) {
            context.strokeRect(ix*step, iy*step, 25, 25);
        }
    }
}

drawGrid(10,10);