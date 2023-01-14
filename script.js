// accessing canvas element from index.html
const canvas = document.getElementsByTagName("canvas")[0];

// setting height and width of canvas by widows' dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// getting canvas drawing context
var context = canvas.getContext("2d");
var fromTop = canvas.height / 2;
var velocity = 0;
var gravity = 0.1;
var horizontalPipeSpacing = 200;
var collided = false;

// make array of pipes
var pipes = [];
for (var i = 0; i < 5; i++) {
  pipes.push(getPipe());
}
// console.log(pipes);

setInterval(function () {

    if(collided){
        return ;
    }

  context.clearRect(0, 0, canvas.width, canvas.height);
  velocity = velocity + gravity;
  fromTop = fromTop + velocity;
  if (fromTop >= canvas.height - 40) {
    fromTop = window.innerHeight - 40;
  }
//   console.log(fromTop);

  // drwaing pipes

  for (var i = 0; i < pipes.length; i++) {
    var pipe = pipes[i];
    context.fillStyle = "green";
    context.fillRect(pipe.top.x, pipe.top.y, pipe.top.width, pipe.top.height);
    context.fillRect(
      pipe.bottom.x,
      pipe.bottom.y,
      pipe.bottom.width,
      pipe.bottom.height,
    );

    checkCollision({x: 200, y: fromTop, width: 40, height: 40}, pipe.top ) ;
    checkCollision({x: 200, y: fromTop, width: 40, height: 40}, pipe.bottom ) ;

    // moving pipes
    pipe.top.x = pipe.top.x - 1;
    pipe.bottom.x = pipe.bottom.x - 1;

    // removing hidden pipes from our array
    if (pipe.top.x < 0) {
      pipes.splice(i, 1);
      pipes.push(getPipe());
    }

   
    // console.log(pipes);
  }

  context.fillStyle = "red";
  context.fillRect(200, fromTop, 40, 40);


console.log(collided)

}, 10);

window.addEventListener("keydown", function () {
  //   console.log("Key pressed");
  velocity = -8;
});

function getPipe() {
  horizontalPipeSpacing = horizontalPipeSpacing + 270;

  if (pipes.length > 0) {
    var xOfLastPipeInList = pipes[pipes.length - 1].top.x;
    horizontalPipeSpacing = xOfLastPipeInList + 270;
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var topPipeHeight = randomIntFromInterval(0, canvas.height / 2);

  const verticalGap = 300;
  return {
    top: {
      x: horizontalPipeSpacing,
      y: 0,
      width: 40,
      height: topPipeHeight,
    },
    bottom: {
      x: horizontalPipeSpacing,
      y: topPipeHeight + verticalGap,
      width: 40,
      height: canvas.height - topPipeHeight - verticalGap,
    },
  };
}

function checkCollision(rect1, rect2) {
//   collided = false;
  if (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.height + rect1.y > rect2.y
  ) {
    // collision detected!
    collided = true;
  }
}
