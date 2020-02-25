---
title: 'ASCII,Unicode and Base64'
date: '2019-09-29'
spoiler: 深入原理，知识浅出
---

## ASCII码
众所周知，任何数据在计算机中都是以二进制的方式存储的。全世界的数据囊括起来有：英文字母、英文标点、阿拉伯数字、文字、符号。那么在计算机内部是如何表示这些数据的呢？最初的ASCII码对英文字母、英文标点、阿拉伯数字进行编码，一个字节表示一个字符，只用了低7位，一共2**7=128个字符，学习到这里的时候，我特意数了下我们的键盘上，有52个字母（分大小写），42个英文标点，再加上1个空格符，总共是95个可显示的字符，那剩下的33个字符是什么字符呢，可以查看wiki，对我们理解计算机编码没什么用，所以这里先忽略。

## Unicode
很显然，这样的字符集，是无法处理我们广袤的语言文字的。所以出现了统一编码字符集Unicode，它是全世界范围内的统一编码规则，唯一的编码对应唯一的符号，在ASCII码的基础上，加入了对各种语言文字甚至新型的表情等符号的编码，并且仍然在不断的增修中。在表示一个Unicode的字符时，通常会用“U+”然后紧接着一组十六进制的数字来表示这一个字符。Unicode的编码空间是U+0000至U+10FFFF，在这个空间内，分为17（0-16）组空间，每组被称为平面，第0组平面，又称为基本多文种平面（BMP），范围在U+0000至U+FFFF，其他平面看下图了解一下。另附上字符对应表[unicode.org](https://home.unicode.org/)和[汉字对应表](http://www.chi2ko.com/tool/CJK.htm)，不妨也打开看看。

![](https://user-gold-cdn.xitu.io/2019/9/19/16d48ee5f782244b?w=1718&h=660&f=png&s=204778)

如果有心，上面的链接你已经打开了，你会看到大多字符都是使用U+xxxx这样的2个字节16bits表示的，例如字“回”，它的Unicode码是`U+56DE`。每个字符的编码有了，那在计算机中怎么存储和处理一连串的字符呢，也就是说编码规则是如何实现的？有UTF-8/UTF-16/UTF-32三种实现方式，其中常用的是UTF-8和UTF-16。

>在查阅unicode的时候，我总是会看到UCS-2 UCS-4这样的描述。“UCS-2 is outdated, though still widely used in software”，Unicode English wiki上有这么一句话。也就是说USC-2是一种过时的叫法，它还有一个最新的叫法UTF-16，这样是不是就明白了？因为2是指2个字节，16是指16位。当然UTF-16和UCS-2确实不完全相等，但是没有必要再深究了。下面一段话摘自wiki:
>
>Unicode defines two mapping methods: the Unicode Transformation Format (UTF) encodings, and the Universal Coded Character Set (UCS) encodings. An encoding maps (possibly a subset of) the range of Unicode code points to sequences of values in some fixed-size range, termed code values. All UTF encodings map all code points (except surrogates) to a unique sequence of bytes.[54] The numbers in the names of the encodings indicate the number of bits per code value (for UTF encodings) or the number of bytes per code value (for UCS encodings). UTF-8 and UTF-16 are probably the most commonly used encodings. UCS-2 is an obsolete subset of UTF-16; UCS-4 and UTF-32 are functionally equivalent.

## UTF-8
UTF-8是一种变长的编码方式，可以使用1~6个字节表示一个字符，但是Unicode最大只到U+10FFFF，所以最多4个字节。它的编码规则如下：
* 1. 取得字符的Unicode码，找出它在下表第一列中处于哪个范围
* 2. 找到范围所对应的二进制的格式
* 3. 将Unicode码转换为二进制，且从右到左的填充入x，多出的位补0

```
   字符的Unicode编码范围 |        UTF-8 编码方式
        (十六进制)      |           (二进制)
   --------------------+---------------------------------------------
   0000 0000-0000 007F | 0xxxxxxx
   0000 0080-0000 07FF | 110xxxxx 10xxxxxx
   0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
   0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```
如此编码完成，试试看“回”字的UTF-8编码结果，答案应该是`11100101 10011011 10011110`，十六进制表示是`e59b9e`，最后我们可以用编辑器来验证下：
![](https://user-gold-cdn.xitu.io/2019/9/20/16d4eb3aa83ddfbd?w=1928&h=1460&f=gif&s=15217364)


## UTF-16
UTF-16使用固定的一个或两个无符号的16位整数来编码。它的编码规则如下：
* 1. 取得字符的Unicode码 `U`，如果小于0x10000，编码结果就是它自己
* 2. 如果`U`在0x10000-0x10FFFF范围内，`U' = U - 0x10000`，且`U'`肯定不超过20位的，则将它分成两个10位，分别填充入`W1 = 0xD800`的后10位和`W2 = 0xDC00`的后10位中
看起来像是这样：
```
U' = yyyyyyyyyyxxxxxxxxxx
W1 = 110110yyyyyyyyyy
W2 = 110111xxxxxxxxxx
```
很有意思哈～，试试计算`U+10437`的UTF-16的编码结果，答案是`1101 1000 0000 0001 1101 1100 0011 0111`，十六进制的表示结果是`d801 dc37`。这里还有一个大端序和小端序的概念，这是描述CPU如何向内存写数据的概念，计算机在处理2个8位字节的时候，若将高位字节存放在低内存地址，则称为“大端序”。若将高位字节存放在高位地址，则称为“小端序”。
那么`d801 dc37`则是大端序Big endian，`01d8 37dc`则是小端序little endian。同样可以在编辑器中去验证UTF-16的编码结果。

## Javascript
js内部使用的编码是UTF-16，我们不妨来看下编码相关的api。

### [String.prototype.charCodeAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
此方法返回的是字符对应的Unicode码的整数值。例如：

```
var sentence = '回家吧！';

var index = 0;

console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
// expected output: "The character code 22238 is equal to 回"
```
那么变体，看下“回”的16进制表示：

```
var sentence = '回家吧！';

var index = 0;

console.log('The character code ' + sentence.charCodeAt(index).toString(16) + ' is equal to ' + sentence.charAt(index));
// expected output: "The character code 56de is equal to 回"
```

### [String.fromCharCode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
此方法将UTF-16转换为字符串。

```
console.log(String.fromCharCode(22238));
// expected output: "回"
```

## Base64
以上是讲了字符到二进制的过程，我们经常会在Http中用Base64编码后传输长字符串。那么Base64又是什么呢，接着往下看。

Base64是以每3个8位为一个单元，转换为4个6位的格式，6位的高两位填充0，这样的8位一共有2**6=64个字符，对应有一个Base64的索引表，找出索引表对应的可打印字符，如此便生成一个Base64字符。但有可能原数据不是3的整数倍，那么如果余下两个输入数据，在编码结果后加1个“=”；如果余下一个输入数据，编码结果后加2个“=”。在这个Base64的算法中，要清晰的认识一点，**当string的编码方式不同时，得到的Base64 string结果也会不同**。
![](https://user-gold-cdn.xitu.io/2019/9/29/16d7c19308aa6ac2?w=850&h=1156&f=png&s=114470)

在Javascript中，有两个内置的方法[btoa()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa)和[atob()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob)分别对ASCII码进行Base64的编码和解码。但是此方法只支持ASCII码，Unicode string怎么办？MDN给的解决方案是：
```
// ucs-2 string to base64 encoded ascii
function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to ucs-2 string
function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
// Usage:
utoa('✓ à la mode'); // 4pyTIMOgIGxhIG1vZGU=
atou('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"

utoa('I \u2661 Unicode!'); // SSDimaEgVW5pY29kZSE=
atou('SSDimaEgVW5pY29kZSE='); // "I ♡ Unicode!"
```
到这里，我们能把字符串编码成Base64形式的输出了，其实过程很简单，在Javascript中，会将utf16转换成utf8，然后再对utf8编码成Base64。注意我们上面提到的，**当string的编码方式不同时，得到的Base64 string结果也会不同**。也就是说，js中，是utf8转Base64。

那么在解码的时候，客户端或者服务端接收到web端传过去的Base64字符，如何正确解码呢？为什么有时会出现乱码呢？

问题就在于Base64解码后，对这些字符如何识别，所以甲乙双方要约定好，转换到Base64之前是使用的什么编码方式，现在来说，大家都是用的utf8，所以用它准没错啦。

## 最后
最后附一个公式，因为我自己老是会忘记，在写这篇文章的过程中还不停翻自己写在笔记本上的：

**1字节(byte) = 8位(bit)**

**1字符 = 一个或多个字节**

## 参考资料

https://tools.ietf.org/html/rfc3629

https://tools.ietf.org/html/rfc2781

https://en.wikipedia.org/wiki/Unicode#Versions

https://my.oschina.net/goal/blog/201032

https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding

http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html

https://zh.wikipedia.org/wiki/Base64

http://www.ruanyifeng.com/blog/2008/06/base64.html