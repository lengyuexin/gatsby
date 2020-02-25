---
title: '前端数据层的探索与实践（一）'
date: '2019-03-15'
spoiler: ...
---

> 第一部分：前端数据层的探索与实践（一）<br />
第二部分：[前端数据层的探索与实践（二）](/data-layer-explore-second)

## 契机
在使用redux的过程中，由于业务复杂度的提升，store里面存储的数据越来越多，通常会有多层次的嵌套和重复数据。同时在与后端交互的过程中，我们经常会讨论是否要按照UI的层次结构来返回数据，结果被后端驳回，因为如果后端从数据库中取到数据后，还要特意为前端加一层转换，一来是考虑到服务器压力，二来是考虑到多设备的时候无法复用接口。

在这样的契机之下，我开始思考，面对复杂的应用，前端也需要处理业务逻辑，那么数据应该如何组织和管理？

## 三种方案

* <a href="https://samnewman.io/patterns/architectural/bff/" target="_blank">中间层BFF（Backend for Frontend）模型</a>

* <a href="http://graphql.cn/" target="_blank" title="用图模式定义后端">GraphQL</a>

* 范式化数据

这次我先讲范式化数据。

## 范式化
所谓“范式化”，就是数据库设计时使用的一系列原理与技术。在讲范式之前，我们先说一下大家都不陌生的关系型数据库，这就是应用范式化的典型。

**关系型数据库**：建立在**关系模型**上的数据库。

**关系模型**：若干个存储数据的二维表，每一行称为一条记录，每一列称为一个字段。表与表之间用关系来描述，有一对一/一对多/多对多三种关系。

借此两个概念很容易想到我们接触得非常多的数据库。那关系型数据库在存储和管理数据的时候遵循哪些原则呢，见下：

**第一范式（1NF）**：表列（或称属性或称字段）具有原子性，不可再分。

**第二范式（2NF）**：满足1NF的前提下，表行（或称实例）必须具有唯一可以被区分的主键key

**第三范式（3NF）**：满足1NF&&2NF的前提下，每个表中不包含已在其他表中定义的非关键字段，也就是不能有冗余数据。

## 前端范式化数据
明白了范式化的概念与设计原则，我们以Redux应用为例，看一下我们应该怎样设计范式化数据，先看一个简单的例子，我们组织数据通常是这样：
![](https://user-gold-cdn.xitu.io/2019/3/11/1696ba44cb83d649?w=620&h=950&f=png&s=93130)
我们分析以上这个例子，可以看出实体有article/author/comment/commenter，对应设计为数据库表的时候可以建三张表user/comment/article，所以范式化数据应该像这样：
![](https://user-gold-cdn.xitu.io/2019/3/11/1696ba6fe75ab688?w=756&h=1454&f=png&s=140081)
总结：
* 每种类型的数据应该具有自己的表,
* 每张表存储在对象中，对象中的每个元素即为一条记录，用id作为key,数据内容作为value
* 数据A与数据B的关系通过ID来描述

这样带来的好处显而易见：

* 数据更加扁平化，最多只有一层
* 数据间的关系清晰
* 数据项是唯一的，减少冗余
* reducer不再需要深层次嵌套处理数据
* 更新数据项时，更新只会发生在当前项，不会对引用该数据项的地方做无必要的重复渲染
* 每个组件可以connect自己的数据，无需一层一层的向下传递数据（可提高性能）


## 应用
当服务器端把数据传到前端的时候，我们不太可能手动的去把这些数据范式化，好在我们已经有了很多成熟的库，帮我们做转化。在Redux应用中，推荐比较多的就是 [Normalizr](https://github.com/paularmstrong/normalizr?spm=a2c4e.11153940.blogcont226841.17.d3067a0blBPz0I) 了，这个库主要是帮我们将数据做范式化处理，输出的数据可以放在state中，显然，这样的范式化数据在store中进行手动处理，会非常不方便，也有这样的库来帮助我们解决范式化数据在store中的问题，比如[Denormalizr](https://github.com/gpbl/denormalizr)。但是还有一个更好的工具，[Redux-ORM](https://github.com/tommikaikkonen/redux-orm)，它可以说是Normalizr和Denormalizr的结合（如果是vue，也有类似的工具[vuex-orm](https://github.com/vuex-orm/vuex-orm)）。

## 结束语
一直认为学习要在熟悉掌握基础的前提下多加实践，所以我这一部分只是讲了一些范式化的基础概念，同时引出生态链中与此相关的受欢迎的库。第二部分我将详细讲一下我的Redux-ORM实践。欢迎小伙伴们一同探讨👏

参考资料：

[cn.redux.js.org/docs/recipes/...](http://cn.redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)

[zhuanlan.zhihu.com/...](https://zhuanlan.zhihu.com/p/36487766)

[redux.js.org/faq/organizing-state...](https://redux.js.org/faq/organizing-state#how-do-i-organize-nested-or-duplicate-data-in-my-state)



