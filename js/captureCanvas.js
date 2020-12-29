var closeButton = document.getElementById('modalclose-button');
var downloadButton = document.getElementById('download-button');
let capturedCanvas;
let modal = document.getElementById('output-modal');

function takeShot() {
    // clear selection first
    tr.nodes([]);
    selectedShapes = [];
    layer.draw();

    // generate canvas
    html2canvas(document.querySelector("#canvas")).then(canvas => {
        let canvasToBeRemoved = modal.getElementsByTagName("canvas");
        if (canvasToBeRemoved.length > 0) {
            // modal.removeChild(modal.childNodes[0]);
            canvasToBeRemoved[0].remove();
        }
        capturedCanvas = canvas;

        modal.appendChild(canvas);
    });
    
    modal.style.display = 'block';

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    
    return;
}

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

downloadButton.addEventListener('click', function() {
    let image = capturedCanvas.toDataURL('image/png');

    let link = document.createElement('a');
    link.href = image;
    link.download = 'geo.png';
    document.body.append(link);
    link.click();
    image = "";
    document.body.removeChild(link);
});
