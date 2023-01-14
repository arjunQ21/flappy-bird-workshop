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





context.fillRect(20, fromTop, 80, 80);

setInterval(function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  velocity = velocity + gravity;
  fromTop = fromTop + velocity;
  if (fromTop >= canvas.height - 80 ) {
    fromTop = window.innerHeight - 80
  }
  console.log(fromTop)
  
  // drwaing pipe
  var pipe = getPipe() ;
  context.fillStyle = "green";
  context.fillRect(pipe.top.x, pipe.top.y, pipe.top.width, pipe.top.height) ;
  context.fillRect(pipe.bottom.x, pipe.bottom.y, pipe.bottom.width, pipe.bottom.height) ;
  context.fillStyle = "red";
  context.fillRect(20, fromTop, 80, 80);
}, 10);

window.addEventListener("keydown", function () {
//   console.log("Key pressed");
  velocity = -8;
});

function getPipe(){
    const verticalGap = 100 ;
    return {
        top: {
            x: 10,
            y: 0,
            width: 40,
            height: 100
        },
        bottom: {
            x: 10,
            y: 100 + verticalGap,
            width: 40,
            height: canvas.height - 100 - verticalGap 
        }
    } ;
}