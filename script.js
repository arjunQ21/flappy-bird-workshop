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
var horizontalPipeSpacing = 150 ;

// make array of pipes
var pipes = [] ;
for(var i = 0 ; i < 5; i++){
    pipes.push(getPipe());
}
console.log(pipes)


setInterval(function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  velocity = velocity + gravity;
  fromTop = fromTop + velocity;
  if (fromTop >= canvas.height - 80) {
    fromTop = window.innerHeight - 80;
  }
  console.log(fromTop);

  // drwaing pipes

  for(var i = 0 ; i < pipes.length; i++){
        var pipe = pipes[i] ;
        context.fillStyle = "green";
        context.fillRect(pipe.top.x, pipe.top.y, pipe.top.width, pipe.top.height);
        context.fillRect(
          pipe.bottom.x,
          pipe.bottom.y,
          pipe.bottom.width,
          pipe.bottom.height,
        );

  }

  context.fillStyle = "red";
  context.fillRect(20, fromTop, 80, 80);
}, 10);

window.addEventListener("keydown", function () {
  //   console.log("Key pressed");
  velocity = -8;
});



function getPipe() {

    horizontalPipeSpacing = horizontalPipeSpacing + horizontalPipeSpacing ;
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var topPipeHeight = randomIntFromInterval(0, canvas.height / 2);

  const verticalGap = 200;
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
