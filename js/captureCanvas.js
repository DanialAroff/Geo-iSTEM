

function takeShot() {
    var modal = document.getElementById('output-modal');
    var captureBtn = document.getElementById('capture-button');

    html2canvas(document.querySelector("#canvas")).then(canvas => {
        modal.appendChild(canvas);
    });
    
    modal.style.display = 'block';

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
