// add event listeners to specify when functions should be triggered
document.addEventListener("click", changeBrushColor);
function changeBrushColor(event) {
    event.preventDefault();
    const brush = document.querySelector('.brush');
    value = document.querySelector('#color-field').value
    brush.style.backgroundColor = value;
}

function squareDivs() {
  for (let i = 0; i < 8000; i++) {
    value = document.querySelector('#color-field').value
    const sqDiv = document.createElement('div');
    sqDiv.className += "square";
    document.querySelector("body").appendChild(sqDiv);

    // sqDiv.addEventListener("click", function() {
      // this.style.background = 'green';
    sqDiv.addEventListener("mouseover", function() {
      this.style.background = value;
    // })
    })
  }
}

squareDivs();

// document.addEventListener("mousemove", draw);
// document.addEventListener("mousedown", setPosition);
// document.addEventListener("mouseenter", setPosition);
//
// document.getElementById('btnElement').addEventListener('click', event) {
//   event.preventDefault()
// });
//
// // last known position
// const pos = { x: 0, y: 0 };
//
// // new position from mouse events
// function setPosition(e) {
//   pos.x = e.clientX;
//   pos.y = e.clientY;
// }
//
// const btnElement = document.querySelector('button')
//
// function changeBrushColor () {
//   document.querySelector('button').
// }
