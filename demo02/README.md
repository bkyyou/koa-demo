

socket  底层套接字编程
websocket  在浏览器中使用的套接字方式
socket.io  对 socket 进行封装，提供优雅降级

1. bodyparser
* bodyparse 插件
* buffer 剖析 bodyparse 原理

2. http
* 跨域 cors 解决方式
* 文件上传 
  * buffer
  * stream
  * 流事件写入
  * formdata上传 formidable 解析
* 分包文件上传

3. compose 剖洋葱模型的简单实现

4. 下载

5. spider

6. sockie.io 简单实现

* response
HTTP/1.1 200
Server: nginx/1.16.1
Date: Thu, 20 Aug 2020 03:41:50 GMT
Content-Type: application/octet-stream;charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
Access-Control-Allow-Origin: http://betahyweb.tian-wang.com
Access-Control-Allow-Headers: Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With,Token,client
Access-Control-Allow-Methods: PUT,POST,GET,DELETE,PATCH,OPTIONS
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: Content-Type,Content-Length,Content-Disposition
Content-Disposition: attachment;filename=%E5%9C%B0%E5%8C%BA%E5%8F%B0%E8%B4%A6.xlsx

Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With,Token,client
Access-Control-Allow-Methods: PUT,POST,GET,DELETE,PATCH,OPTIONS
Access-Control-Allow-Origin: http://betahyweb.tian-wang.com
Access-Control-Expose-Headers: Content-Type,Content-Length,Content-Disposition
Connection: keep-alive
Content-Disposition: attachment;filename=%E5%9C%B0%E5%8C%BA%E5%8F%B0%E8%B4%A6.xlsx
Content-Type: application/octet-stream;charset=utf-8
Date: Thu, 20 Aug 2020 03:41:50 GMT
Server: nginx/1.16.1
Transfer-Encoding: chunked


* request
GET /standingBook/region/0/export HTTP/1.1
Host: betahyapi.tian-wang.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Accept: application/json, text/plain, */*
token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIHRva2VuIiwiYXVkIjoiQUxMIiwiY29tcGFueUlkIjoiMjAxOTExMjUxNTQ2MDc1MTJTQ1A5NTIxMTMiLCJuYmYiOjE1OTc4OTQ4NTUsImNvbXBhbnlUeXBlIjo2LCJpc3MiOiJjb21wYW55IiwiZXhwIjoxNTk3OTgxMjU1LCJ1c2VySWQiOjEsImlhdCI6MTU5Nzg5NDg1NX0.0JMSeA-BGkhotqPe8xOwMK_iaOlDkVjtul86A0zig6E
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36
client: web
Origin: http://betahyweb.tian-wang.com
Referer: http://betahyweb.tian-wang.com/
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9

Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9
Cache-Control: no-cache
client: web
Connection: keep-alive
Host: betahyapi.tian-wang.com
Origin: http://betahyweb.tian-wang.com
Pragma: no-cache
Referer: http://betahyweb.tian-wang.com/
token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIHRva2VuIiwiYXVkIjoiQUxMIiwiY29tcGFueUlkIjoiMjAxOTExMjUxNTQ2MDc1MTJTQ1A5NTIxMTMiLCJuYmYiOjE1OTc4OTQ4NTUsImNvbXBhbnlUeXBlIjo2LCJpc3MiOiJjb21wYW55IiwiZXhwIjoxNTk3OTgxMjU1LCJ1c2VySWQiOjEsImlhdCI6MTU5Nzg5NDg1NX0.0JMSeA-BGkhotqPe8xOwMK_iaOlDkVjtul86A0zig6E
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36
