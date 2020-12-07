'use strict'
alert('Hello, world!')

function backgroundyellow () { // eslint-disable-line no-unused-vars
  document.getElementById("paragraph").style.backgroundColor = "yellow";
}

function switchtext() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Goodbye";
  } else {
    x.innerHTML = "Hello";
  }
}
