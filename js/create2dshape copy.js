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

var tr = new Konva.Transformer();
layer.add(tr);


// add a new feature, lets add ability to draw selection rectangle
var selectionRectangle = new Konva.Rect({
  fill: 'rgba(247, 206, 33, .5)',
});
layer.add(selectionRectangle);

var x1, y1, x2, y2;
stage.on('mousedown touchstart', (e) => {
  // do nothing if we mousedown on eny shape
  if (e.target !== stage) {
    return;
  }
  x1 = stage.getPointerPosition().x;
  y1 = stage.getPointerPosition().y;
  x2 = stage.getPointerPosition().x;
  y2 = stage.getPointerPosition().y;

  selectionRectangle.visible(true);
  selectionRectangle.width(0);
  selectionRectangle.height(0);
  layer.draw();
});

stage.on('mousemove touchmove', () => {
  // no nothing if we didn't start selection
  if (!selectionRectangle.visible()) {
    return;
  }
  x2 = stage.getPointerPosition().x;
  y2 = stage.getPointerPosition().y;

  selectionRectangle.setAttrs({
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1),
  });
  layer.batchDraw();
});

stage.on('mouseup touchend', () => {
  // no nothing if we didn't start selection
  if (!selectionRectangle.visible()) {
    return;
  }
  // update visibility in timeout, so we can check it in click event
  setTimeout(() => {
    selectionRectangle.visible(false);
    layer.batchDraw();
  });

  var shapes = stage.find('.shape').toArray();
  var box = selectionRectangle.getClientRect();
  var selected = shapes.filter((shape) =>
    Konva.Util.haveIntersection(box, shape.getClientRect())
  );
  tr.nodes(selected);
  selectedShapes = selected;
  layer.batchDraw();
});

// clicks should select/deselect shapes
stage.on('click tap', function (e) {
  // if we are selecting with rect, do nothing
  if (selectionRectangle.visible()) {
    return;
  }

  // if click on empty area - remove all selections
  if (e.target === stage) {
    tr.nodes([]);
    selectedShapes = [];
    layer.draw();
    return;
  }

  // do nothing if clicked NOT on our shapes
  if (!e.target.hasName('shape')) {
    return;
  }

  // do we pressed shift or ctrl?
  const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
  const isSelected = tr.nodes().indexOf(e.target) >= 0;

  if (!metaPressed && !isSelected) {
    // if no key pressed and the node is not selected
    // select just one
    tr.nodes([e.target]);
    selectedShapes = [e.target];
  } else if (metaPressed && isSelected) {
    // if we pressed keys and node was selected
    // we need to remove it from selection:
    const nodes = tr.nodes().slice(); // use slice to have new copy of array
    // remove node from array
    nodes.splice(nodes.indexOf(e.target), 1);
    tr.nodes(nodes);
    selectedShapes = nodes;
  } else if (metaPressed && !isSelected) {
    // add the node into selection
    const nodes = tr.nodes().concat([e.target]);
    tr.nodes(nodes);
    selectedShapes = nodes;
  }
  layer.draw();
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
        x: 100,
        y: 100,
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
        x: stage.width() / 2,
        y: stage.height() / 2,
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
        x: stage.width() / 2,
        y: stage.height() / 2,
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
        x: stage.width() / 2,
        y: stage.height() / 2,
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
  });;
}

// add button event bindings
document.getElementById('delete-button').addEventListener(
  'click',
  function () {
    selectedShapes.forEach(function(shape) {
      tr.nodes([]);
      shape.destroy();
      layer.draw();
    })
  },
  false
);

document.body.addEventListener(
  'keydown',
  function (e) {
    var key = e.keyCode || e.which;
    // if (e.key === 'Delete')  as alternative
    if (key == 46) {
      selectedShapes.forEach(function(shape) {
        tr.nodes([]);
        shape.destroy();
        layer.draw();
      })
    }
  },
  false
);

