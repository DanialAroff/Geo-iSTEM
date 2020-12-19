function resizeStage() {
    let properties = window.getComputedStyle(canvas, null);
    var canvasWidth = properties.getPropertyValue('width');
    var canvasHeight = properties.getPropertyValue('height');
    canvasWidth = parseFloat(canvasWidth, 10);
    canvasHeight = parseFloat(canvasHeight, 10);

    stage.width(canvasWidth);
    stage.height(canvasHeight);
}

window.onresize = resizeStage;