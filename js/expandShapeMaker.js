var isExpanded = false;

document.getElementById('expand').addEventListener('click', function() {
    var shapeMaker = document.getElementById('shape-maker');
    var shapeSelector = document.getElementsByClassName('shapes-2d');
    if (!isExpanded) {
        shapeMaker.style.overflowY = 'scroll';
        shapeMaker.style.height = '75%';
        shapeSelector[0].style.visibility = 'visible';
        isExpanded = true;
    } else {
        shapeMaker.style.overflowY = 'hidden';
        shapeMaker.style.height = '10%';
        shapeSelector[0].style.visibility = 'hidden';
        isExpanded = false;
    }
  },
  false
);

window.onresize = function() {
    if (window.innerWidth > 768) {
        var shapeMaker = document.getElementById('shape-maker');
        shapeMaker.style.height = '100%';
        shapeMaker.style.overflowY = 'scroll';
        shapeSelector[0].style.visibility = 'visible';
    }
}