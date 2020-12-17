var idList = [];
var newID = -1;
var PIXEL = 42;
var canvas = document.getElementById('canvas');

// get canvas computed size since it is undefined
let properties = window.getComputedStyle(canvas, null);
var canvasWidth = properties.getPropertyValue('width');
var canvasHeight = properties.getPropertyValue('height');
canvasWidth = parseFloat(canvasWidth, 10);
canvasHeight = parseFloat(canvasHeight, 10);

var stage = new Konva.Stage({
    container: canvas,
    width: canvasWidth,
    height: canvasHeight,
});

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

    var layer = new Konva.Layer();

    if (c == 'square') {
      var square = new Konva.Rect({
        x: 0,
        y: 0,
        width: (getSquareMeasurements() * PIXEL),
        height: (getSquareMeasurements() * PIXEL),
        fill: '#54a0ff',
        draggable: true,
        id: newID,
      });

      layer.add(square); 
    } else if (c == 'rectangle') {
      var rect = new Konva.Rect({
        x: 0,
        y: 0,
        width: (getRectangleMeasurements().width * PIXEL),
        height: (getRectangleMeasurements().height * PIXEL),
        fill: '#feca57',
        draggable: true,
        id: newID,
      });
      layer.add(rect);
    } else if (c == 'triangle') {
        // #1dd1a1'
    } else if (c == 'circle') {
      var circle = new Konva.Circle({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: getCircleMeasurements() * PIXEL / 2,
        fill: '#ff6b6b',
        draggable: true,
        id: newID,
      });

      layer.add(circle);
    } else if (c == 'oval') {
      var oval = new Konva.Ellipse({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radiusX: getOvalMeasurements().diameterX * PIXEL / 2,
        radiusY: getOvalMeasurements().diameterY * PIXEL / 2,
        fill: '#5f27cd',
        draggable: true,
        id: newID,
      });

      layer.add(oval); 
    }
    layer.on('mousedown', function () {
        stage.container().style.cursor = 'move';
      });

    layer.on('mouseup', function () {
    stage.container().style.cursor = 'default';
    });

    stage.add(layer);
    // document.getElementById("canvas").appendChild(element);
    // dragElement(element);
}