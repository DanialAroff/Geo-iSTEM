function takeShot() {
    var modal = document.getElementById('output-modal');
    var closeButton = document.getElementById('modalclose-button');

    html2canvas(document.querySelector("#canvas")).then(canvas => {
        let canvasToBeRemoved = modal.getElementsByTagName("canvas");
        if (canvasToBeRemoved.length > 0) {
            // modal.removeChild(modal.childNodes[0]);
            canvasToBeRemoved[0].remove();
        }
        modal.appendChild(canvas);
        console.log(modal.innerHTML);
        
    });
    
    modal.style.display = 'block';

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    })
}
