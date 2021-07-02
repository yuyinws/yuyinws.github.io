---
title: git常用操作总结
date: 2021-06-17
description: Git
tags:
 - git
categories: 
 - 其他
---

> origin-url:远程仓库地址
> origin-branch:远程分支
## clone
``` shell
# 克隆远程master分支到本地
git clone <origin-url>

# -b:克隆远程指定分支到本地
git clone -b <origin-branch> <origin-url> 
```