var reg = new RegExp('\\bis\\b', 'g');

var oring = 'this is a dog ,where is it?';

var res = oring.replace(reg, 'IS');

console.log(res)