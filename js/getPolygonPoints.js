

function getPolygonPoints(sides, radius) {
    let points = [];
    var angle = 360 / sides;
    // var angle = 72;
    for (let i = 0; i < sides; i++) {
        let x = 0 + radius * Math.sin(i * (angle * Math.PI / 180));
        console.log("x: " + x + " sin -> " + Math.sin(i * angle) + " " + (i * angle));
        let y = 0 + radius * Math.cos(i * (angle * Math.PI / 180));
        points.push(x);
        points.push(y);
    }
    return points;
}