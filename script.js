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

context.fillStyle = "red";

context.fillRect(20, fromTop, 80, 80);

setInterval(function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  velocity = velocity + gravity;
  fromTop = fromTop + velocity;
  if (fromTop >= canvas.height - 80 ) {
    fromTop = window.innerHeight - 80
  }
  console.log(fromTop)
  context.fillRect(20, fromTop, 80, 80);
}, 10);

window.addEventListener("keydown", function () {
//   console.log("Key pressed");
  velocity = -8;
});
