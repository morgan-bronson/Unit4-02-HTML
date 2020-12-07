'use strict'
alert('Hello, world!')

function backgroundyellow () { // eslint-disable-line no-unused-vars
  document.getElementById('paragraph').style.backgroundColor = 'yellow'
}

function switchtext () {
  let x = document.getElementById('myDIV')
  if (x.innerHTML === 'Hello') {
    x.innerHTML = 'Goodbye'
  } else {
    x.innerHTML = 'Hello'
  }
}

function HidingText () {
  let x = document.getElementById('myDIV')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}
