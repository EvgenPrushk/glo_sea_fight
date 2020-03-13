const CELL_SIZE = 23;
const FIELD_SIZE = 30;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const mouse = getMouse(canvas);
// setInterval( () => console.log(mouse));


const player = new Topology({
    offsetX: 50,
    offsetY: 87,
});
setInterval( () =>  console.log(player.getCoordinats(mouse))
);

player.
    addSheeps(
        {x: 0, y: 0, direct: 0, size: 3},
        {x: 0, y: 2, direct: 1, size: 4},
    )
    .addChecks(
        {x: 5, y:   7},
        {x: 5, y: 4},
    )

drawGrid();

player.draw(context);

const  game = new Game;
function clearCanvas () {
    canvas.width |= 0;
}

// function drawRect(param) {
//     if (!param.fill && !param.stroke) {
//         return
//     }
//     context.beginPath();
//     context.rect(param.x, param.y, param.width, param.height);

//     if (param.fill) {
//         context.fillStyle = param.fillStyle;
//         context.fill();
//     }

//     if (param.stroke) {
//         context.strokeStyle = param.strokeStyle;
//         context.lineWidth = param.lineWidth;
//         context.stroke();
//     }
// };

function drawGrid() {
    context.strokeStyle = "blue";
    context.lineWidth = 0.5;
    for (let i = 0; i < canvas.width / CELL_SIZE; i++) {
        context.beginPath();
        context.moveTo(i * CELL_SIZE, 0);
        context.lineTo(i * CELL_SIZE, canvas.height);
        context.stroke();
    }
    for (let i = 0; i < canvas.height / CELL_SIZE; i++) {
        context.beginPath();
        context.moveTo(0, i * CELL_SIZE);
        context.lineTo(canvas.width, i * CELL_SIZE);
        context.stroke();
    }
    context.lineWidth = 2;
    context.strokeStyle = "red";

    context.beginPath();
    context.moveTo(0, 73);
    context.lineTo(canvas.width, 73);
    context.stroke();
}