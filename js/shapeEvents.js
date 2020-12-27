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