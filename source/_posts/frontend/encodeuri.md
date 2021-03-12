---
title: JS中的encodeURI与encodeURIComponent
date: 2021-01-27
sidebarDepth: 1
cover: /static/img/cover/encodeuri.png
description: 分析encodeURI与encodeURIComponent的区别
tags:
 - JavaScript
 - frontend
keyword: 
- encodeURI
- encodeURIComponent
categories: 
 - 前端
---
## 作用
[encodeURI()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 和 [encodeURIComponent()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 都用于对字符串的转义，区别在于2个函数的转义范围不同。

## 区别
encodeURI不转义的字符
| 类型|包含|
|---|---|
|保留字符|; , / ? : @ & = + $|
|非转义的字符|字母 数字 - _ . ! ~ * ' ( )|
|数字符号|#|

encodeURIComponent不转义的字符
> 字母 数字 - _ . ! ~ * ' ( )

## 注意点
浏览器会自动对URL进行一次encodeURI()转义。当访问这个地址时[https://www.yuyinws.top/encode.html?test=测试](https://www.yuyinws.top/encode.html?test=测试)可以看到控制台的输出为：
``` js
console.log(window.location.href)
https://www.yuyinws.top/encode.html?test=%E6%B5%8B%E8%AF%95
```
因此在获取参数时应该使用decodeURI()进行解析。详细函数见[这里](https://www.yuyinws.top/blog/views/frontend/2020/2020-12-17.html#%E8%8E%B7%E5%8F%96url%E5%8F%82%E6%95%B0)