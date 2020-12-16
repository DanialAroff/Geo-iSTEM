function getSquareMeasurements() {
    var squarelen = document.getElementById('square-length').value;
    return squarelen;
}
function getRectangleMeasurements() {
    var rectWidth = document.getElementById('rectangle-length-1').value;
    var rectHeight = document.getElementById('rectangle-length-2').value;
    return {width: rectWidth, height: rectHeight};
}
function getCircleMeasurements() {
    return document.getElementById('circle-diameter').value;
}