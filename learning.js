// accessing canvas element from index.html
const canvas = document.getElementsByTagName("canvas")[0];

// setting height and width of canvas by widows' dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// getting canvas drawing context
var context = canvas.getContext("2d");

// setting filling color
context.fillStyle = "red";

var xDistance = 0;

xDistance = 78;
// cant assign variables like this
// 78 = xDistance ;

// drawing our first rectangle
context.fillRect(xDistance, 100, 100, 50);

// running functions in certain intervals
setInterval(function () {
  xDistance = xDistance + 5;
  console.log(xDistance);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(xDistance, 100, 100, 50);
  context.fillRect(90, xDistance, 10, 50);

}, 100);

function sayHi() {
  console.log("hi");
}


window.addEventListener("keydown", function(){
    console.log("Some keys pressed from keyboard")
})