var reg = new RegExp('[a-jA-J]', 'g');

var oring = 'this is A dog ,where Is it?';

var res = oring.replace(reg, 'X');

console.log(res)