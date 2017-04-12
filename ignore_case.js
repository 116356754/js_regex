var reg = new RegExp('\\bis\\b', 'gi');

var oring = 'this is a dog ,where Is it?';

var res = oring.replace(reg, '0');

console.log(res)