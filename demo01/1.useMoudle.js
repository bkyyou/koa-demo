
// function close(repo, desc) {
//   const { promisify } = require('util');
//   const download = require('download-git-repo');
//   const ora = require('ora');
//   const process = ora(`正在下载 ${repo}`);
//   download(repo, desc, err => {
//     err ? console.log(err) : 'ok'
//   })
// }

console.log('process', process.argv);

let repo = 'github:su37josephxia/vue-template';
let desc = './test';

const clone = require('./download.js');

console.log('clone', clone);

clone(repo, desc);

