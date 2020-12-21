---
title: 'http常用的头部'
date: '2020-12-17'
spoiler: http常用的头部
---


||||
|--|--|--|
|头部|作用|分类|
|cache-control|设置强缓存|缓存|
|expires|设置强缓存|缓存|
|etag|设置协商缓存|缓存|
|last-modified|设置协商缓存|缓存|
|if-none-match|用于和etag比对|缓存|
|if-modified-since|用于和last-modified比对|缓存|
|access-control-allow-origin|设置允许跨域访问的源|cors|
|access-control-allow-methods|设置允许跨域访问的方法|cors|
|access-control-allow-headers|设置允许跨域访问的头|cors|
|access-control-allow-credentials|设置是否允许跨域携带cookie|cors|
|access-control-max-age|设置options请求时间间隔|cors|
|accept-language|客户端期望接收的语言|语言|
|content-language|服务端返回的语言|语言|
|accept-encoding|客户端期望接收的编码格式|编码|
|content-encoding|服务端返回的编码格式|编码|
|accept-charset|客户端期望接收的字符集|字符集|
|accept|客户端期望接收的数据类型|数据类型|
|content-type|服务端返回的数据类型和字符集|数据类型,字符集|
|content-length|服务端返回的资源大小|资源大小|
|transfer-encoding|分块传输标志，为0表示传输完毕|分块传输|
|host|服务器对应的域名|其他|
|origin|当前请求资源所在页面的协议和域名|其他|
|referer|当前请求资源所在页面的完整路径，可带查询参数，但不带hash|其他|
|user-agent|客户端信息|其他|



