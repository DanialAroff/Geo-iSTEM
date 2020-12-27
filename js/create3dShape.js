function create3DShape(d) {
  // creates new ID for new shape
  while(true) {
    newID = "s" + Math.round(Math.random() * 10000);
    if (idList.includes(newID));
    else {
      idList.push(newID);
      break;
    }
  }

  var imageObj = new Image();
  var shape3d;

  if (d == 'cube') {
    imageObj.onload = function() {
      shape3d = new Konva.Image({
        x: (stage.width() / 2) - (PIXEL),
        y: (stage.height() / 2) - (PIXEL),
        image: imageObj,
        width: 2 * PIXEL,
        height: 2 * PIXEL,
        draggable: true,
        id: newID,
        name:'shape',
      })
      shapes.push(shape3d);
      layer.add(shape3d);
      layer.batchDraw();
    }
    imageObj.src = './assets/3D Shapes/cube/cube-CG.png';
  } else if (d == 'cuboid') {
    imageObj.onload = function() {
      shape3d = new Konva.Image({
        x: (stage.width() / 2) - (PIXEL),
        y: (stage.height() / 2) - (PIXEL),
        image: imageObj,
        width: 3 * PIXEL,
        height: 2 * PIXEL,
        draggable: true,
        id: newID,
        name:'shape',
      })
      shapes.push(shape3d);
      layer.add(shape3d);
      layer.batchDraw();
    }
    imageObj.src = './assets/3D Shapes/cuboid/cuboid-ML.png';
  } else if (d == 'cylinder') {
    imageObj.onload = function() {
        shape3d = new Konva.Image({
          x: (stage.width() / 2) - (PIXEL),
          y: (stage.height() / 2) - (PIXEL),
          image: imageObj,
          width: 2 * PIXEL,
          height: 3 * PIXEL,
          draggable: true,
          id: newID,
          name:'shape',
        })
        shapes.push(shape3d);
        layer.add(shape3d);
        layer.batchDraw();
      }
      imageObj.src = './assets/3D Shapes/cylinder/cylinder-PA.png';
  } else if (d == 'sphere') {
    imageObj.onload = function() {
        shape3d = new Konva.Image({
          x: (stage.width() / 2) - (PIXEL),
          y: (stage.height() / 2) - (PIXEL),
          image: imageObj,
          width: 2 * PIXEL,
          height: 2 * PIXEL,
          draggable: true,
          id: newID,
          name:'shape',
        })
        shapes.push(shape3d);
        layer.add(shape3d);
        layer.batchDraw();
      }
    imageObj.src = './assets/3D Shapes/sphere/sphere-EB.png';
  } else if (d == 'pyramid') {
    imageObj.onload = function() {
        shape3d = new Konva.Image({
          x: (stage.width() / 2) - (PIXEL),
          y: (stage.height() / 2) - (PIXEL),
          image: imageObj,
          width: 2 * PIXEL,
          height: 2 * PIXEL,
          draggable: true,
          id: newID,
          name:'shape',
        })
        shapes.push(shape3d);
        layer.add(shape3d);
        layer.batchDraw();
      }
    imageObj.src = './assets/3D Shapes/pyramid/pyramid-BY.png';
  } else if (d == 'cone') {
    imageObj.onload = function() {
        shape3d = new Konva.Image({
          x: (stage.width() / 2) - (PIXEL),
          y: (stage.height() / 2) - (PIXEL),
          image: imageObj,
          width: 2 * PIXEL,
          height: 2.5 * PIXEL,
          draggable: true,
          id: newID,
          name:'shape',
        })
        shapes.push(shape3d);
        layer.add(shape3d);
        layer.batchDraw();
      }
    imageObj.src = './assets/3D Shapes/cone/cone-EF.png';
  }

  stage.add(layer);

  // add strokes to each shape when it is hover over
  shapes.forEach(function(shape) {
    shape.on('mouseover', function () {
      this.stroke('#191923');
      this.strokeWidth(1.5);
      layer.batchDraw();
    });
    shape.on('mouseout', function () {
      this.stroke('');
      this.strokeWidth(0);
      layer.batchDraw();
    });
    shape.on('contextmenu', function (e) {
      const menu = document.getElementById('rmenu');
      e.evt.preventDefault();
      menu.className = '';
      var containerRect = stage.container().getBoundingClientRect();
      menu.style.top = containerRect.top + stage.getPointerPosition().y + 'px';
      menu.style.left =  stage.getPointerPosition().x + 'px';
      console.log(containerRect.left);
    });
  });
}