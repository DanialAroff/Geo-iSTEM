var idList = [];
var newID = -1;
var PIXEL = 42;
var canvas = document.getElementById('canvas');
var shapes = [];
var selectedShapes = [];

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

var layer = new Konva.Layer();
stage.add(layer);


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
    
    if (c == 'square') {
      var square = new Konva.Rect({
        x: (stage.width() / 2) - (PIXEL),
        y: (stage.height() / 2) - (PIXEL),
        width: 2 * PIXEL,
        height: 2 * PIXEL,
        fill: '#54a0ff',
        rotationSnaps: [0, 90, 180, 270],
        draggable: true,
        id: newID,
        name: 'shape',
      });

      layer.add(square); 
      shapes.push(square);
    } else if (c == 'rectangle') {
      var rect = new Konva.Rect({
        x: (stage.width() / 2) - (2 * PIXEL),
        y: (stage.height() / 2) - (PIXEL),
        width: 4 * PIXEL,
        height: 2 * PIXEL,
        fill: '#e74c3c',
        rotationSnaps: [0, 90, 180, 270],
        draggable: true,
        id: newID,
        name: 'shape',
      });
      shapes.push(rect);
      layer.add(rect);
    } else if (c == 'triangle') {
      const width = 3 * PIXEL;
      const height = 2 * PIXEL;

      var triangle = new Konva.Line({
        x: (stage.width() / 2) - (1.5 * PIXEL),
        y: (stage.height() / 2) - (PIXEL),
        points: [0, height, width / 2, 0, width, height],
        fill: '#1dd1a1',
        closed: true,
        draggable: true,
        id: newID,
        name: 'shape',
      });
      shapes.push(triangle);
      layer.add(triangle);
    } else if (c == 'circle') {
      var circle = new Konva.Circle({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 2 * PIXEL / 2,
        fill: '#ff6b6b',
        rotationSnaps: [0, 90, 180, 270],
        draggable: true,
        id: newID,
        name: 'shape',
      });
      shapes.push(circle);
      layer.add(circle);
    } else if (c == 'oval') {
      var oval = new Konva.Ellipse({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radiusX: 4 * PIXEL / 2,
        radiusY: 2 * PIXEL / 2,
        fill: '#5f27cd',
        rotationSnaps: [0, 90, 180, 270],
        draggable: true,
        id: newID,
        name:'shape',
      });
      shapes.push(oval);
      layer.add(oval); 
    } else if (c == 'rhombus') {
      const width = 2 * PIXEL;
      const height = 3 * PIXEL;

      var rhombus = new Konva.Line({
        x: stage.width() / 2 - (PIXEL),
        y: stage.height() / 2 - (1.5 * PIXEL),
        points: [0, height / 2, width / 2, 0, width, height / 2, width / 2, height],
        fill: '#576574',
        closed: true,
        draggable: true,
        id: newID,
        name:'shape',
      });
      shapes.push(rhombus);
      layer.add(rhombus); 
    } else if (c == 'trapezium') {
      const topWidth = 2 * PIXEL;
      const botWidth = 4 * PIXEL;
      const height = 2 * PIXEL;

      var trape = new Konva.Line({
        x: stage.width() / 2 - (2 * PIXEL),
        y: stage.height() / 2 - (PIXEL),
        points: [0, height, (botWidth / 2) - (topWidth / 2), 0, (botWidth / 2) + (topWidth / 2), 0, botWidth, height],
        fill: '#30336b',
        closed: true,
        draggable: true,
        id: newID,
        name:'shape',
      });
      shapes.push(trape);
      layer.add(trape);
    } else if (c == 'parallelogram') {
      const width = 4 * PIXEL;
      const height = 2 * PIXEL;

      var para = new Konva.Line({
        x: stage.width() / 2 - (2 * PIXEL),
        y: stage.height() / 2 - (PIXEL),
        points: [0, height, width / 4, 0, width + (42 * 1), 0, width, height],
        fill: '#B53471',
        closed: true,
        draggable: true,
        id: newID,
        name:'shape',
      });
      shapes.push(para);
      layer.add(para);
    }
 
  stage.add(layer);
  
  // add strokes to each shape when it is hover over
  shapes.forEach(function(shape) {
    shape.on('mouseover', function () {
      this.stroke('#191923');
      this.strokeWidth(1.5);
      layer.draw();
    });
    shape.on('mouseout', function () {
      this.stroke('');
      this.strokeWidth(0);
      layer.draw();
    });
    shape.on('contextmenu', function (e) {
      const menu = document.getElementById('rmenu');
      e.evt.preventDefault();
      menu.className = '';
      // menu.style.display = 'initial';
      var containerRect = stage.container().getBoundingClientRect();
      menu.style.top = containerRect.top + stage.getPointerPosition().y + 'px';
      menu.style.left =  stage.getPointerPosition().x + 'px';
      console.log(containerRect.left);
    });
  });;
}

function createPolygon(sides) {
  // creates new ID for new shape
  while(true) {
    newID = "s" + Math.round(Math.random() * 10000);
    if (idList.includes(newID));
    else {
      idList.push(newID);
      break;
    }
  }

  const radius = 1.1 * PIXEL;
  let points = getPolygonPoints(sides, radius);

  let poly = new Konva.Line({
    x: stage.width() / 2,
    y: stage.height() / 2,
    points: points,
    fill: '#ffd105',
    rotation: '180',
    closed: true,
    draggable: true,
    id: newID,
    name:'shape',
  });
  shapes.push(poly);
  layer.add(poly);

  stage.add(layer);
    
  // add strokes to each shape when it is hover over
  shapes.forEach(function(shape) {
    shape.on('mouseover', function () {
      this.stroke('#191923');
      this.strokeWidth(1.5);
      layer.draw();
    });
    shape.on('mouseout', function () {
      this.stroke('');
      this.strokeWidth(0);
      layer.draw();
    });
    shape.on('contextmenu', function (e) {
      const menu = document.getElementById('rmenu');
      e.evt.preventDefault();
      menu.className = '';
      // menu.style.display = 'initial';
      var containerRect = stage.container().getBoundingClientRect();
      menu.style.top = containerRect.top + stage.getPointerPosition().y + 'px';
      menu.style.left =  stage.getPointerPosition().x + 'px';
    });
  });
}