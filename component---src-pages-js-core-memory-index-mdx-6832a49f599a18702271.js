(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"9MF5":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return u}));var b=t("shca"),c=(t("xwgP"),t("N0F1")),a=t("Hv6d"),l=t("JLKy"),o={},r={_frontmatter:o},j=a.default;function u(n){var e=n.components,t=Object(b.a)(n,["components"]);return Object(c.b)(j,Object.assign({},r,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)(l.a,{style:{background:"#4AC29A"},mdxType:"P"},Object(c.b)("p",null,"js中将内存划分为栈内存和堆内存。",Object(c.b)("br",null),"\n栈内存除了存储基本类型和引用类型的堆内存地址外,还可以作为代码执行环境。",Object(c.b)("br",null),"\n堆内存存储引用类型的值,如对象的属性名和属性值,函数体中的代码字符串。",Object(c.b)("br",null))),Object(c.b)("h2",null,"内存开辟"),Object(c.b)(l.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'//开辟栈内存,存储变量like,值为coding\nvar like="coding";\n//开辟堆内存,存储对象的属性名 name 和属性值 冷月心\n//开辟栈内存,存储变量obj,值为其堆内存地址\nvar obj={name:"冷月心"}\n//开辟堆内存,存储函数体中的代码字符串 console.log(123)\n//开辟栈内存,存储变量fn,值为其堆内存地址\nfunction fn(){console.log(123)}\n'))),Object(c.b)("h2",null,"栈内存回收"),Object(c.b)(l.a,{mdxType:"P"},"全局作用域和私有作用域,都属于栈内存。 全局作用域在页面关闭时销毁。 函数执行产生私有作用域,一般而言,函数执行完对应的内存被销毁。 如果外部有变量保持其引用,则不销毁(闭包)。"),Object(c.b)(l.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"function log(){alert(1)}\nlog()//执行完正常销毁\nfunction f1(){return function(){}}\n//f1 执行返回一个引用类型值,该值被外部变量f2接收,f1不销毁\nvar f2=f1();\n//dom注册事件监听\n//该函数被dom对象上的属性onclick接收,保持其引用,不销毁\ndom.onclick=function(){}\n//F形成的作用域不会立即销毁,执行后销毁\nfunction F(){ return function(){}}\nF()()\n"))),Object(c.b)("h2",null,"堆内存回收"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"代码示例")),Object(c.b)(l.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'var obj={name:"冷月心"}\n//外部有变量保持着对该堆内存的引用,这部分内存不会销毁\n//手动去掉或更改引用,使得该堆内存无外部引用,js引擎会在空闲的时候将这部分内存回收\nobj=null\nobj=1;\n'))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"v8堆内存空间分类")),Object(c.b)(l.a,{style:{background:"lightblue"},mdxType:"P"},"以chrome浏览器中使用的js引擎v8为例,v8将堆内存分成新生代内存和老生代内存。 新生代内存存放生存时间短的对象, 老生代内存中存放生存时间长的对象。 它们最终都会交给js的垃圾回收器处理,其中主垃圾回收器主要负责老生代的垃圾回收, 副垃圾回收器主要负责新生代的垃圾回收。"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"v8堆内存垃圾回收机制")),Object(c.b)(l.a,{style:{background:"pink"},mdxType:"P"},"不论什么类型的垃圾回收器，它们都有一套共同的执行流程。 首先标记空间中活动对象和非活动对象(可回收的对象)。 然后对被标记为非活动对象所占据的内存进行回收(其实就是标记清除法)。 一般而言，频繁回收对象后，内存中就会存在大量不连续空间，这些不连续的内存空间被称为内存碎片。 如果不做整理，即使剩余的非连续空间满足分配要求，也无法分配一个大的连续的内存空间。 所以最后需要进行内存整理。"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"v8新生代Scavenge算法和对象晋升策略")),Object(c.b)(l.a,{mdxType:"P"},Object(c.b)("p",null,"新生代中用Scavenge算法来处理。把新生代空间一分为二，一半是对象区域，一半是空闲区域。\n在进行垃圾回收时，除了标记清除外，副垃圾回收器还会完成存活对象到空闲区域的复制转移和对象的有序排列。\n这个有序排列过程就相当于完成了内存整理，不会出现内存碎片的情况。\n最后，将对象区域与空闲区域进行翻转，循环利用，这样就完成了垃圾对象的回收操作。\n为了保证复制转移效率，新生代内存往往会设置的很小，这也意味着新生代内存空间容易被填满。\n如此，出现了对象晋升策略这一概念，经过两次垃圾回收依然还存活的对象，会被移动到老生区中。")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"全停顿和增量标记算法")),Object(c.b)(l.a,{style:{background:"#6dd5ed"},mdxType:"P"},Object(c.b)("p",null,"实际上，js引擎的垃圾回收是和主线程执行的脚本相冲突的，不能同时进行。\n一旦执行垃圾回收算法，正在执行的js脚本必须暂停，待垃圾回收完毕后再恢复执行，\n这种行为叫做全停顿。由此，增量标记算法横空而出，它可以把一个完整的垃圾回收任务拆分为很多小的任务，\n可理解为时间分片。执行时间比较短的小任务可与js逻辑交替进行，这样就不会有明显的卡顿感知。")),Object(c.b)("h2",null,"推荐阅读"),Object(c.b)("p",null,Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://time.geekbang.org/column/intro/216"}),"https://time.geekbang.org/column/intro/216")),Object(c.b)("p",null,Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://juejin.cn/post/6844903993420840967"}),"https://juejin.cn/post/6844903993420840967")))}u.isMDXComponent=!0},shca:function(n,e,t){"use strict";function b(n,e){if(null==n)return{};var t,b,c={},a=Object.keys(n);for(b=0;b<a.length;b++)t=a[b],e.indexOf(t)>=0||(c[t]=n[t]);return c}t.d(e,"a",(function(){return b}))}}]);
//# sourceMappingURL=component---src-pages-js-core-memory-index-mdx-6832a49f599a18702271.js.map