const fs = require('fs');

// 状态
const rs = fs.createReadStream('k8s.png');
const ws = fs.createWriteStream('k8s2.png');

// 开始
rs.pipe(ws);

