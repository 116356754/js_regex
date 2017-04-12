var reg = new RegExp('[^iot]', 'gi');

var oring = 'this is a dOg ,where is it?';

var res = oring.replace(reg, 'X');

console.log(res)