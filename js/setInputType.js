var shapeInputs = document.getElementsByClassName('shape-inputs');

function changeInputType() {
    for(var i = 0; i < shapeInputs.length; i++) {
        shapeInputs[i].className = 'shape-inputs unselected';
    }
    
    if (get2DSelection() == 'square') {
        document.getElementById('square-inputs').className = 'shape-inputs';
    } else if (get2DSelection() == 'rectangle') {
        document.getElementById('rectangle-inputs').className = 'shape-inputs';
    } else if (get2DSelection() == 'triangle') {
        document.getElementById('triangle-inputs').className = 'shape-inputs';
    } else if (get2DSelection() == 'circle') {
        document.getElementById('circle-inputs').className = 'shape-inputs';
    } else if (get2DSelection() == 'oval') {
        document.getElementById('oval-inputs').className = 'shape-inputs';
    }
}
