// add strokes to each shape when it is hover over
function putEventBindings(shapes) {
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

// call this after stage is loaded
window.onload = putEventBindings(shapes);

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

const menu = document.getElementById('rmenu');

window.addEventListener('click', () => {
  menu.className = 'hide';
})

function moveUp() {
  selectedShapes.forEach(function(shape) {
    shape.moveUp();
    layer.draw();
  })
}
function moveDown() {
  selectedShapes.forEach(function(shape) {
    shape.moveDown();
    layer.draw();
  })
}
function deleteShape() {
  selectedShapes.forEach(function(shape) {
    tr.nodes([]);
    shape.destroy();
    layer.draw();
  })
}