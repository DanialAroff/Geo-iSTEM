var idList = [];
var newID = -1;
var PIXEL = 37.7953;

function createShape(c) {
    // creates new ID for new shape
    while(true) {
      newID = "s" + Math.round(Math.random() * 10000);
      if (idList.includes(newID));
      else {
        idList.push(newID);
        break;
      }
    }

    var element = document.createElement("div");
    element.id = newID;

    if (c == 'square') {
      element.className = 'square shape';
      element.style.width = (getSquareMeasurements() * PIXEL) + 'px';
      element.style.height = (getSquareMeasurements() * PIXEL) + 'px';
      element.style.backgroundColor = '#54a0ff';  
    } else if (c == 'rectangle') {
      element.className = 'rectangle shape';
      element.style.width = (getRectangleMeasurements().width * PIXEL) + 'px';
      element.style.height = (getRectangleMeasurements().height * PIXEL) + 'px';
      element.style.backgroundColor = '#feca57';
    } else if (c == 'triangle') {
        element.className = 'triangle shape';
    } else if (c == 'circle') {
        element.className = 'circle shape';
        element.style.width = (getCircleMeasurements() * PIXEL) + 'px';
        element.style.height = (getCircleMeasurements() * PIXEL) + 'px';
        element.style.borderRadius = '50%';
        element.style.backgroundColor = '#ff6b6b';
    }

    document.getElementById("canvas").appendChild(element);
    dragElement(element);
}