var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var anotherArr = [ 1, 2, 3 ];

Array.prototype.splice.apply([], [0, 0].concat(anotherArr));

console.log(arr);