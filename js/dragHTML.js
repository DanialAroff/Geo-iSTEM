var picker = document.querySelector('.picker');
var container = document.body;

const childOfPicker = picker.childNodes;
const headerTxt = childOfPicker[0];
const header = childOfPicker[1];

// "distX", "distY" will help us to know the distance
// between the last position and the new, 
// to keep the space between the click and the element, 
// and of course, to move the element smooth
var state = { distX: 0, distY: 0 };

// These functions are declared outside of the elements
// because they are going to be reused in two different
// kind of events device: touch/mouse
function onDown(e) {
  // Stop bubbling, this is important to avoid 
  // unexpected behaviours on mobile browsers:
  
  if (e.target === picker || e.target === header || e.target === headerTxt) {
    e.preventDefault();
  } else return;
  
  // Get the correct event source regardless the device:
  // Btw, "e.changedTouches[0]" in this case for simplicity 
  // sake we'll use only the first touch event
  // because we won't move more elements.
  var evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
  
  // "Get the distance of the x/y", formula:
  // A: Get current position x/y of the circle. 
  // Example: circle.offsetLeft
  // B: Get the new position x/y. 
  // Example: evt.clientX
  // That's all.
  state.distX = Math.abs(picker.offsetLeft - evt.clientX);
  state.distY = Math.abs(picker.offsetTop - evt.clientY);
  
  // Disable pointer events in the circle to avoid
  // a bug whenever it's moving.
  picker.style.pointerEvents = 'none';
};
function onUp(e) {
  // Re-enable the "pointerEvents" in the circle element.
  // If this is not enabled, then the element won't move.
  picker.style.pointerEvents = 'initial';
};
function onMove(e) {
  // Update the position x/y of the circle element
  // only if the "pointerEvents" are disabled, 
  // (check the "onDown" function for more details.)
  if (picker.style.pointerEvents === 'none') {
    
    // Get the correct event source regardless the device:
    // Btw, "e.changedTouches[0]" in this case for simplicity 
    // sake we'll use only the first touch event
    // because we won't move more elements.
    var evt = e.type === 'touchmove' ? e.changedTouches[0] : e;
    
    // Update top/left directly in the dom element:
    picker.style.left = `${evt.clientX - state.distX}px`;
    picker.style.top = `${evt.clientY - state.distY}px`;
  };
};

// FOR MOUSE DEVICES:
picker.addEventListener('mousedown', onDown);
header.addEventListener('mousedown', onDown);
headerTxt.addEventListener('mousedown', onDown);
container.addEventListener('mousemove', onMove);
container.addEventListener('mouseup', onUp);

// FOR TOUCH DEVICES:
picker.addEventListener('touchstart', onDown);
header.addEventListener('touchstart', onDown);
headerTxt.addEventListener('touchstart', onDown);
container.addEventListener('touchmove', onMove);
container.addEventListener('touchend', onUp);