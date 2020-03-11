const CELL_SIZE = 23;
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width  = 500;
canvas.height = 500;

// drawRect({
//     x: 10,
//     y: 10,
//     width: 150,
//     height: 300,

//     strokeStyle: "red",
//     stroke: true,

//     fillStyle: "green",
//     fill: true,

//     lineWidth: 2,

// })
drawGrid();

function drawRect(param) {
    if (!param.fill && !param.stroke) {
        return
    }
  context.beginPath();
  context.rect(param.x, param.y, param.width, param.height);
  
  if (param.fill) {
        context.fillStyle = param.fillStyle;
      context.fill();
  }

  if (param.stroke) {
    context.strokeStyle = param.strokeStyle;  
    context.lineWidth = param.lineWidth;
    context.stroke();
    }
};

function drawGrid() {
    context.strokeStyle = "blue";
    context.lineWidth = 0.5;
    for (let i = 0; i < canvas.width / CELL_SIZE; i++){
        context.beginPath();
        context.moveTo(i * CELL_SIZE, 0);
        context.lineTo(i * CELL_SIZE, canvas.height);
        context.stroke();
    }
    for (let i = 0; i < canvas.height / CELL_SIZE; i++){
        context.beginPath();
        context.moveTo(0, i * CELL_SIZE);
        context.lineTo(canvas.width,  i * CELL_SIZE);
        context.stroke();
    }
    context.lineWidth = 2;
    context.strokeStyle = "red";

    context.beginPath();
    context.moveTo(0, 73);
    context.lineTo(canvas.width, 73);
    context.stroke();
}
