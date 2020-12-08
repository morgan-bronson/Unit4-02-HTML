'use strict'
alert('Hello, world!')

function backgroundyellow () { // eslint-disable-line no-unused-vars
  document.getElementById('paragraph').style.backgroundColor = 'yellow'
}

function hidingText () {
  const x = document.getElementById('mydiv')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function switchText () {
  const x = document.getElementById('mydiv1')
  if (x.innerHTML === 'Hello') {
    x.innerHTML = 'Goodbye'
  } else {
    x.innerHTML = 'Hello'
  }
}
