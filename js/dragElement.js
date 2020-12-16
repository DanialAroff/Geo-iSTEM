// dragElement(document.getElementById("drag"));

function dragElement(elmnt) {
    var canvas = document.getElementById("canvas");
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      if ((elmnt.offsetTop - pos2) < -30) {
        elmnt.style.top = -30 + "px";
      }
      else if((elmnt.offsetTop - pos2) >= canvas.clientHeight - 20) {
        elmnt.style.top = canvas.clientHeight - 20 + "px";
      }
      else {
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      }

      if ((elmnt.offsetLeft - pos1) < -30) {
        elmnt.style.left = -30 + "px";
      }
      else if((elmnt.offsetLeft - pos1) >= canvas.clientWidth - 40) {
        elmnt.style.left = canvas.clientWidth - 40 + "px";
      }
      else {
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
      
      console.log(elmnt.id + " " + (elmnt.offsetTop - pos2) + " " + (elmnt.offsetLeft- pos1));
      console.log(canvas.clientHeight + " " + canvas.clientWidth);
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }