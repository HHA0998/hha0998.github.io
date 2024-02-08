var hor = 1;
var ver = 2;
var Debug;

const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
}

addEventListener("mousemove", updateDisplay, false);
addEventListener("mouseenter", updateDisplay, false);
addEventListener("mouseleave", updateDisplay, false);

document.getElementById("Mh").innerHTML = hor;
document.getElementById("Mv").innerHTML = ver;
console.log(ver);


