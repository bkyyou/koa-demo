const fs = require('fs');

// 同步
let file = fs.readFileSync('./download.js');
console.log('file', file);
console.log('file.toString()', file.toString());

// 异步 可以使用 util 改造
fs.readSync('./download.js', (err, data) => {
  if(err) throw err;
  console.log('data', data);
})