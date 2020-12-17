function getSquareMeasurements() {
    var length = document.getElementById('square-length').value;
    return length;
}
function getRectangleMeasurements() {
    var rectWidth = document.getElementById('rectangle-length-1').value;
    var rectHeight = document.getElementById('rectangle-length-2').value;
    return {width: rectWidth, height: rectHeight};
}
function getTriangleMeasurements() {
    var length1 = document.getElementById('triangle-length-1').value;
    var length2 = document.getElementById('triangle-length-2').value;
    var length3 = document.getElementById('triangle-length-3').value;
    return {length1: length1, length2: length2, length3: length3};
}
function getCircleMeasurements() {
    return document.getElementById('circle-diameter').value;
}
function getOvalMeasurements() {
    var dia1 = document.getElementById('oval-diameter-1').value;
    var dia2 = document.getElementById('oval-diameter-2').value;
    return {diameterX: dia1, diameterY: dia2};
}