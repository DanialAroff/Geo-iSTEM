var isExpanded = false;

document.getElementById('expand').addEventListener('click', function() {
    var shapeMaker = document.getElementById('shape-maker');
    if (!isExpanded) {
        shapeMaker.style.overflowY = 'scroll';
        shapeMaker.style.height = '75%';
        isExpanded = true;
    } else {
        shapeMaker.style.overflowY = 'hidden';
        shapeMaker.style.height = '10%';
        isExpanded = false;
    }
  },
  false
);