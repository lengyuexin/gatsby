---
title: '原型对象与原型链'
date: '2019-04-20'
spoiler: ...
---

讲原型对象之前我们先理清Js的几个概念
## 对象
可以从三点来理解：

* 散列表
* 无序属性的集合
* **每个对象都是基于一个引用类型创建的**。引用类型可以是原生类型（如Js内置的Object/Array/Date/Function/基本包装类型String、Number、Boolean等），也可以是自定义类型。

## 实例

* 引用类型的值是引用类型的一个实例，即对象是某个特定引用类型的实例

综上两个概念，问题来了——

1. 下面的a是不是一个对象？
```
var a = '123'
a instanceof Object  // false
a instanceof String  // false
typeof a // 'string'
```
instanceof检测它既不是Object对象的实例，也不是String对象的实例。所以它并不是一个对象，那它是什么类型呢？再看typeof，输出string，其实它只是一个值类型
String。
> ps: 为什么它可以调用一些String对象的方法，如`a.concat`，这是因为在读取一个基本值类型的时候，后台会自动创建一个对应的基本包装类型的对象。

2. 函数是不是对象？
```
function test(){}
test instanceof Object  // true
typeof test // 'function'
```
instanceof检测出来它是Object的实例，所以它是一个对象。进一步看它的具体类型，typeof检测它的数据类型是引用类型`Function`，也就是说test也是Function的一个实例？验证一下：
```
test instanceof Function  // true
```
## 构造函数
构造函数和普通函数没什么不同，真正使一个函数变为构造函数的，其实是我们的new 操作符。

综上所述，问题来了——

1. 构造函数是对象吗？

```
var B = function(a) {this.a = a }
B instanceof Function  // true
B instanceof Object // tre
typeof B  // 'function'
```
其实结合上面的分析，很容易明白，构造函数也是对象。

> ps：我们常常`new Array()`，Array其实是一个js内置的构造函数，也就是一个内置对象，也就是Function的实例。结论：Array是Function类型的实例，其他js内置对象同理。

## 原型对象
每个函数都有一个原型对象，通过这个对象，可以让所有由该函数创建的实例共享属性和方法。函数的原型对象有一个自有属性constructor，这个属性指向该函数。

## 构造函数访问原型对象
在创建一个新函数时，会为该函数创建一个prototype属性，通过这个属性我们就可以访问到该函数的原型对象。假设有一个构造函数`Person`，那么构造函数的原型对象即`Person.prototype`，那么构造函数和原型对象的关系会是这样：

![](https://user-gold-cdn.xitu.io/2019/3/30/169ce80d41bdec6a?w=1102&h=364&f=png&s=29054)

## 对象访问原型对象
既然可以通过函数的prototype属性获得原型对象，那当我创建一个`Person`对象`person`时，想要通过person访问构造函数的原型对象怎么办呢？这个时候就轮到我们常见的一个属性`__proto__`上场了。其实在ECMA-262中并没有这样一个属性，真正存在的是一个叫[[prototype]]的指针。我们之所以可以在浏览器环境中使用这个属性，是因为浏览器帮我们做了这样一个实现。所以构造函数、原型对象、对象的关系会是这样：
![](https://user-gold-cdn.xitu.io/2019/3/31/169cf6212fc729dd?w=1046&h=656&f=png&s=43632)

## 原型链
再往下深入，原型对象也是对象，那基于它会不会也有一个像上图一样的关系呢？假设Person.prototype是Parent的实例，那么他们的关系会是这样：
![](https://user-gold-cdn.xitu.io/2019/3/31/169cf62cc108ee30?w=1012&h=624&f=png&s=48565)
假设Parent.prototype是Grandpa的实例，那么他们的关系会是这样：

![](https://user-gold-cdn.xitu.io/2019/3/31/169cf66fdb615a26?w=1014&h=810&f=png&s=62975)
这样一条由`__proto__`连接起来的线就是原型链。
我们说所有函数的默认原型都是Object的实例，所以我们原型链的终点是Object.prototype。

至此应该都理解了原型和原型链了。下面问题来了——

**1. Array/Function这些内置对象与其构造函数Function的关系？**

Array是内置对象，有一个内部指针`__proto__`，指向构造函数的原型对象`Function.prototype`。所以`Array._proto === Function.prototype`。Function同理，`Function.__proto__ === Function.prototype`

**2. `instanceof`到底在做什么？**

我们知道instanceof是用来检测对象是否是构造函数的一个实例。那么具体它做了些什么呢？[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)的说法：构造函数的prototype属性是否出现在对象的原型链中的任何位置。其实已经很明白了，简单实现一下会更直观：

```
function myinstanceof(obj, func) {
    var prototypeObj = obj.__proto__;
    return prototypeObj === func.prototype 
        || myinstanceof(prototypeObj, func);
}
```
**3. `new`操作符到底做了什么？**

为什么new操作符可以让一个普通函数变为构造函数？new 操作符到底做了什么？
当new一个对象时，发生了这些事情：
           1. 创建一个新对象
           2. 将新对象的内部指针`__proto__`指向构造函数的原型对象
           3. 赋值this
           4. 执行构造函数
           5. 返回这个新对象

直观的使用代码表达：
```
function createObj(func) {
    var newObj = {};
    newObj.__proto__ = func.prototype;
    func.apply(newObj, Array.prototype.slice.call(arguments, 1));
    return newObj;
}
```

##参考

https://github.com/mqyqingfeng/Blog/issues/2

Javascript高级程序技术（第3版）