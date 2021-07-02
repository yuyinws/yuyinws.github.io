---
title: Flex常用属性
date: 2021-07-02
description: Flex常用属性汇总
tags:
 - JavaScript
 - frontend
 - CSS
categories: 
 - 前端
 - CSS
---
## 父容器属性
### flex-direction(决定子项目的排列方向)

- row（默认，从左至右）
- row-reverse（从右至左）
- column（从上往下）
- cloumn-reverse（从下往上）

### justify-content(决定子项目的对齐方式)

- flex-start（默认，左对齐）
- flex-end（右对齐）
- center（居中）
- space-between（两端对齐）
- space-around（每个项目的左右间隔相等）

### flex-wrap(子项目换行方式)

- nowrap（默认，不换行）
- wrap（正常换行）
- wrap-reverse（换行，第一行在下方）

### flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。