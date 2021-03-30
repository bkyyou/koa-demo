// 3000
var express = require('express');
const proxy = require('http-proxy-middleware').createProxyMiddleware;

console.log('proxy', proxy);

const app = express()

app.use(express.static(__dirname + '/'))

// 本地开发可以用用
// app.use('/api', proxy({ target: 'http://localhost:4000', changeOrigin: true }));

module.exports = app