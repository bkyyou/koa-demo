const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

// 4000
const app = http.createServer((req, res) => {
  const { url, method } = req;
  // console.log('cookie', req.headers.cookie)
  // console.log('req', req)
  console.log('method', method)
  if (method == "GET" && url == "/api/users") {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      // 允许头部字段
      "Access-Control-Allow-Headers": "X-Token,Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS",
      // 允许添加 cookie
      "Access-Control-Allow-Credentials": "true",
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({ serve: true }))
    // res.end('serve')
  } else if (method == "POST" && url == "/api/users") {
    res.setHeader('Set-Cookie', 'cookie1=va222;')
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "X-Token,Content-Type",
      // "Access-Control-Allow-Methods": "OPTIONS",
      "Access-Control-Allow-Credentials": "true",
      // "Content-Type": "application/json"
    });
    res.end(JSON.stringify({ serve: true }))
    // res.end('serve')
  } else if (method == "OPTIONS" && url == "/api/users") {
    // console.log('OPTIONS', method)
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "X-Token,Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS",
      "Access-Control-Allow-Credentials": "true"
    });
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.end();
  } else if (method == "OPTIONS" && url == "/upload") {
    // console.log('OPTIONS', method)
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "X-Token,Content-Type,file-name",
      "Access-Control-Allow-Methods": "OPTIONS",
      "Access-Control-Allow-Credentials": "true"
    });
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.end();
  } else if (method == 'POST' && url == '/upload') {
    console.log('serve upload')
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "X-Token,Content-Type,multipart/form-data,file-name",
      // "Access-Control-Allow-Methods": "OPTIONS",
      "Access-Control-Allow-Credentials": "true"
    });
    console.log('req.headers', req.headers);
    const fileName = req.headers['file-name'] ? req.headers['file-name'] : 'abc.png'

    let outputFile = path.resolve(__dirname, './files/' + fileName);
    let fis = fs.createWriteStream(outputFile);

    // 1 buffer
    // let bufferArr = [];
    // let size = 0;
    // req.on('data', data => {
    //   bufferArr.push(data);
    //   size += data.length
    // })
    // req.on('end', data => {
    //   var buffer = Buffer.concat(bufferArr, size);
    //   console.log(buffer);
    //   fs.writeFileSync(outputFile, buffer)
    //   size = 0;
    //   res.end()
    // })

    // 2 流事件写入
    req.on('data', data => {
      console.log('data:', data)
      fis.write(data)
    })
    req.on('end', () => {
      fis.end()
      res.end()
    })

    // 3 stream
    // req.pipe(fis);
    // res.end();

    // // 4 插件 请搜索：https://www.npmjs.com/package/formidable formdata
    // let form = new formidable.IncomingForm();
    // //设置文件上传存放地址
    // form.uploadDir = './uploads';
    // // 设置文件上传大小(默认20M)
    // form.maxFileSize = 200 * 1024 * 1024;
    // //执行里面的回调函数的时候，表单已经全部接收完毕了。
    // form.parse(req, function(err, fields, files) {
    //   console.log('files', files);
    //   // 时间戳
    //   let timestamps = Math.round(new Date().getTime() / 1000).toString();
    //   // 扩展名
    //   let extname = path.extname(files.uploadFile.name);
    //   // let extname = files.uploadFile.name;
    //   // 旧路径
    //   let oldPath = __dirname + '/' + files.uploadFile.path;

    //   // 老文件名
    //   let oldFileName = files.uploadFile.name;
    //   // 新路径(默认无扩展名,需要引入path里面的得到extname得到)
    //   let newPath = __dirname + '/uploads/' + getDate() + timestamps + extname;
    //   // 新文件名
    //   let newFileName = getDate() + timestamps + extname;

    //   console.log('newPath', newPath);
    //   console.log('oldPath', oldPath);

    //   //改名api - http://nodejs.cn/api/fs.html#fs_fs_rename_oldpath_newpath_callback
    //   fs.rename(oldPath, newPath, function(err) {
    //     if (err) throw Error('修改文件名失败!~');
    //     console.log('修改前的文件名：', oldFileName, '修改后的文件名：', newFileName);
    //     // res.writeHead(200, { 'content-type': 'text/plain' });
    //     res.end('成功!~');
    //   });
    // });

  }
});

// 日期方法.
function getDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return year + '-' + month + '-' + day + '-'
}

// express
// app.all('*',function(req,res,next){  
//   let origin=req.headers.origin;
//     res.setHeader('Access-Control-Allow-Origin',"*");
//     res.setHeader('Access-Control-Allow-Headers','Content-Type');
//      next();
//  })

module.exports = app;