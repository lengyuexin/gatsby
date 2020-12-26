---
title: 面经
date: '2020-12-22'
spoiler: 面经
---



### 58 一面

1. 自我介绍
2. 诸多业务问题
3. 项目中主要负责什么
4. 原生js怎么实现拖放
5. react-dnd拖放的核心API
6. react diff 算法复杂度是多少
7. diff造成的非预期更新如何解决
8. 如何实现路由监听
9. 页面适配方案:百分比,flex,vh,vw
10. 平时对js和css基础有过了解吗
11. 从地址栏输入地址到页面回显,都发生了什么
12. 解释下重绘和回流
13. 说一下js中的类和java中的类的区别
14. 说一下js中如何实现函数重载
15. webpack动态加载



### 58 二面

1. 自我介绍
2. 为什么刚工作不久离职了
3. 业务中负责什么
4. node偏运维方向的有没有了解过(docker k8s)
5. 业务中主要用node干了什么
6. react生命周期有了解吗
7. 说下react-router源码你看完后印象深刻的部分
8. 数组去重怎么实现，不用set怎么实现
9. 实现一下es6的extends
10. 有没有接触过移动端，小程序，h5等方向



### 百度一面

1. 自我介绍
2. js数据类型和存储方式，如何判断
3. typeof [] 返回什么
4. new操作符 做了什么
5. 数组中一万个数据，访问第一个和最后一个效率会有什么差异，为什么
6. forEach for in for of 的差异
7. 如何改变this指向
8. js中函数是如何调用的
9. 说下原型和继承
10. 浏览器缓存
11. 说下浏览器事件循环
12. js是单线程还是多线程，为什么这么设计
13. css弧形永动动画实现
14. css 1px像素适配 
15. css设置div宽高比3:4 padding-bottom:75%
16. 说下transform 和transition
17. 类数组怎么转换成数组
18. new Array()接收的参数是什么
19. get和post的区别
20. http状态码
21. react生命周期
22. setState更新是同步还是异步
23. axios源码整体架构
24. 手写Promise.all
25. Promise中用了什么设计模式
26. Promise都有哪些状态
27. 算法12345678.01 =>123,456,78.01
28. 算法12345678.01=>12,345,678.01
29. 从地址栏输入地址到页面回显,都发生了什么

### 百度二面

1. 自我介绍
2. 业务中你用node都做了什么
3. 你对node还有什么想分享的吗，觉得用起来爽的部分(gzip pipe)
4. 业务中数据是怎么存储的，node为什么没有接入数据库
5. node单线程容易崩溃，怎么维护服务的
6. pm2内部机制了解吗
7. cluster了解多少
8. 业务线如何用端口号区分(nginx http-proxy)
10. 业务上有什么坑嘛 (环境多)
11. webpack常用配置
12. webpack插件写过吗
13. webpack常用插件
13. 关于webpack你还有什么想分享的吗 (同步加载异步加载的实现)
14. 浏览器地址栏输入请求地址到页面回显发生了什么
15. 重绘和重排了解吗
16. 重绘和重排如何做取舍
17. 如何将css内容插入到页面上(style-loader)
18. 如果让你实现style-loader,你打算怎么做
19. 算法题-手写快排
20. 算法题-查找一个字符串中出现次数最多的字符
21. 算法复杂度层面比较一下快排和其他排序
22. 项目是内部使用吗 (是，未开源)
23. 有没有考虑过高并发场景，如何解决(缓存，压缩，负载均衡，集群)
24. 现在是在职状态吗
25. 最后离职日期是多少
26. 手上有没有其他offer
27. 如果今晚三面是否有时间(说有上线，推迟了)
28. 反问一：百度App部门有没有使用node的场景
29. 反问二：App部门是不是只有移动端场景，有没有其他的，比如pc
30. 反问三：百度怎么做容灾的
31. 反问四：百度App是分工明确还是也会出现身兼多职的情况
32. 反问五：给我一个今后学习发展的建议和这次面试的简单评价



### 百度三面

1. 自我介绍
2. 为什么刚工作不久离职
3. 你的个人倾向是什么，技术或者业务上
4. 美团和百度你会怎么选
5. 期望薪资


### 抖音一面

1. 自我介绍
2. 说一下业务中你负责的部分
3. 业务中数据是怎么存储的
4. 业务中拖拽如何控制位置的，适配怎么处理，全屏怎么控制
5. 你用nodejs和java分别做了哪些业务
6. 业务中的缩略图是什么，实现方案
7. 说下jwt
8. 说下js中数据存储方式
9. 知道内存碎片怎么产生的吗 v8
10. post请求有几种方式触发
11. post的ContentType类型有哪些(application/x-www-form-urlencoded/multipart/form-data/text/plain)
12. 知道jwt有哪些缺点吗
13. 说一下http和https的区别
14. https的tls了解吗
15. 说一下锁(懵逼)，举例是读锁和写锁
16. 为什么要去看axios的源码，大体实现
17. 业务中权限是怎么接入的，数据表怎么划分的
18. 能说一下css盒模型吗
19. 说下box-sizing中border-box 和content-box的区别
20. this指向 



```jsx
var fullname = '1';
var obj = {
   fullname: '2',
   prop: {
      fullname: '3',
      //如果改成普通函数呢？
      getFullname:()=> {
         return this.fullname;
      }
   }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());



```


16. 算法题1:节点渲染

```jsx

const el = require('./element.js')；
const ul = el('ul', {id: 'list'}, [
  el('li', {class: 'item'}, ['Item 1']),
  el('li', {class: 'item'}, ['Item 2']),
  el('li', {class: 'item'}, ['Item 3'])
])
const ulRoot = ul.render();
document.body.appendChild(ulRoot);

<ul id='list'>
  <li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
  <li class='item'>Item 3</li>
</ul>

```

17. 算法题2:属性获取


```jsx
{
    a:{
      b:{
        c:{f:"aa"}
      },
      d:{
        e:{g:"bb"},
        h:{i:"cc"}
      },
      j:{
        k:"dd"
      }
    }
}
// [f,g,i,c,e,h,k,b,d,j,a]

function Format(obj) {
    if (!obj) return []
    let res = []
    let queue = [obj]
    while (queue.length) {
        let arr = []
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let curr = queue.shift()
            for (let s in curr) {
                if (typeof curr === 'object') {
                    queue.push(curr[s])
                    arr.push(s)
                }
            }
        }

        res = [...arr, ...res]
    }
    return res
}

console.log(Format(obj)) 

```


### 抖音二面



1. 看你简历有提到nginx配置，主要配置了什么
2. 说下上线部署流程中常用的linux命令
3. node的进程守护怎么做的，发现非预期故障怎么排查
4. 项目中为什么选择用nodejs
5. 业务中负责哪些部分
6. 手写一个koa2的compose
7. 手写一个Scheduler类，实现并发控制

```jsx

//JS实现一个带并发限制的异步调度器Scheduler，
//保证同时运行的任务最多有两个。
//完善代码中Scheduler类，使得以下程序能正确输出：
//Scheduler内部可以写其他的方法
class Scheduler {
  add(promiseCreator) { ... }

  // ...
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4


```


### 抖音三面



1. 为什么工作不久离职
2. 你觉得你擅长哪些技术(react+node+计算机网络)
3. 说一下进程线程，如何通信?
4. 两个线程可以直接通信吗
5. 你觉得node的适用场景是什么
6.  相比其他后台语言,为什么你更倾向node?
7. 在业务开发上，你觉得node和java的区别是什么?
8. node服务的性能监测有没有了解过?
9. http中间人劫持了解吗?如何解决呢?(说了https)
10. 为什么https可以做到避免中间人劫持?(说了加密层tls)
11. 展开说一下tls握手(对称，非对称，对称+非对称的组合)
12. 加密套件指的是?(举例了AES)
13. 业务中的安全问题有没有遇到过?怎么解决的?(说了base64,cors,xss,csrf,cookie的httponly和samesite属性)
14. 你倾向的技术领域和业务场景是怎样的?
15. 算法1:二叉树层序遍历和s形的层序遍历
16. 算法2:如何在从左到右升序，从上到下升序，每一行第一个元素大于上一行最后一个元素的二维数组中查找某个数字的索引?如果是一维数组呢?
17. 算法3:二分法的实现
18. 算法4:单链表反转
19. 反问:抖音安全部门主要的业务范围是什么？












### 猿辅导一面

1. 自我介绍
2. 业务中负责的部分
3. 业务中数据怎么存储的
4. 为什么坚持用node
5. 算法1:promise并发控制
6. 算法2:前k个元素
7. js中遍历数组的方式
8. react中遇到的坑，怎么解决的
9. 说一下类组件和函数组件
10. 选择hooks的优点
11.什么时候用类组件
12. 说下http缓存，如何实现
13. 反问一:这边有没有使用node的场景
14. 反问二 :业务线中使用的技术栈是什么
15. 反问三:有没有jq那种老项目
16. 反问四:面试评价和今后发展的建议



### 猿辅导二面

1. 自我介绍
2. 诸多业务问题
3. react diff算法如何实现的，比对复杂度是多少
4. 如何使用react-dnd完成拖放的，说下主要API
5. 大数据量场景前端怎么处理，让页面展示尽可能流畅
6. 业务中看你有涉及到node的文件读写操作，有没有想过如果某个文件被锁怎么处理？
7. 前端缩略图(截图)方案是什么
8. 业务中的实时保存会有性能开销，又没有做什么优化？
9. node转buffer输出字符串会比直接string输出快，你的依据是什么？
10. 算法一:给定一串数字，求它全排列结果
11. 算法二:实现类似百度那种联想搜索(模糊匹配)
12. 收尾闲聊:你觉得一面难还是二面难？我说二面吧，数学不太好，全排列没屡清楚。






### 猿辅导三面


1. 根据简历确认了一下基本信息
2. 为什么刚工作几个月就离职
3. 看你大学学的挺多的，高中是不是没好好学习呀(笑，解释说高中是为了高考被动式学习，大学是为了工作主动学习)
4. 日语N2是指？(解释了下等级，日企门槛)
5. 看你对前端热情挺高的，为什么选择了前端呢？
6. 然后面试官直接给我安排了研发方向，前期ng，后期react，说是在组建一个复杂架构小组，目前两人，预计4-6人。(说实话，有点慌)
7. 做个题吧，给定学生id和分数组成的列表，写一个函数，通过id获取排名，注意分数相同并列名次的处理(写了七七八八，后边面试官说思路可以，就这样吧)
8. 然后让我等下hr，面试官去下一场面试了(面试专场，一下午来了大概20+，每个面试官都很忙，后续基本没有反问时间)










### 快手一面

1. 自我介绍
2. 项目应用场景和优势
3. 写个继承案例
4. Object.create实现
5. Object.create传null和{} 有啥区别吗
6. 手写promise(写完then后面试官说可以了)
7. 实现一个数组扁平化方法flat
8. js为什么设计成单线程
9. 事件循环说一下
10. Promise里都是微任务吗
11. 平时怎么学习的
12. koa2中间件和redux中间件比较，原理
13. koa2的洋葱模型和redux中间件的洋葱模型一样吗
14. 两个compose的大概实现,reduce的妙用
15. 对比一下express,koa2(我连同比较了egg)
16. 为什么不要在循环、条件语句或者嵌套方法中调用Hooks
17. new Promise返回的实例和实例then方法执行后返回的promise是一个吗
18. 平时有浏览过哪些国外的网站吗



### 快手二面

1. 说一下为什么要用hooks，解决了什么问题
2. react函数组件和类组件触发更新的方式有哪些
3. react的强制更新有了解吗
4. react在一秒内点击按钮多次(+1)，如何获取最后一次的新状态
5. react-router权限路由写一下
6. 实现一个带缓存的求阶乘函数
7. 说说你对koa2中间件的理解
8. 某些接口允许跨域，某些不允许，如何实现?能不能使用koa2中间件的方式实现一下?
9. koa2中ctx.set的等价写法
10. 用node如何实现一个带压缩和缓存的http-server？



### 快手三面

1. 自我介绍(侧重说下个人优势和项目亮点)
2. 为什么刚工作不久离职
3. 如果有成熟稳定的A团队和从0到1的B团队，你倾向哪种
4. 如果B团队做不好有可能会因为业绩不达标被砍掉，做的好会有高收益，A团队一直是稳定的，你倾向哪种
5. A团队业务线偏向底层功能开发,为B团队服务。B团队在A团队产出基础上，会面对更多复杂业务，你倾向哪种
6. 反问1:刚才提到的AB部门的业务覆盖场景是只有pc端吗?还是也有其他端?
7. 反问2:工作模式是否为导师制?





### 美团一面

1. 自我介绍
2. 为什么刚工作不久就离职了
3. 项目中常用的linux命令
4. 业务中打包怎么做的
5. 如何查询某个进程占用的端口号(linux中) netstat -tunlp|grep 80 lsof -i:80
6. 实现一个new操作符 
7. git reset 和git rebase了解吗
8. 实现Object.create
9. 实现数组扁平化函数flat
10. webpack有哪些优化方案
11. loader和plugin有写过吗
12. react合成事件了解吗？
13. 这些事件处理函数最终挂载到了哪？
14. react中如何阻止冒泡
15. react中setState同步还是异步
16. react15和react16更新机制的差异
17. 为什么react16架构升级后就能中断更新，根据什么决定是否中断
18. react源码看过哪些？
19. react中调和的部分是在哪个包?有看过实现吗
20. hooks为什么不能在条件或循环中使用，原理清楚吗？
21. react为什么要引入hooks，解决了哪些问题
22. 类组件如何实现逻辑复用？
22. 打印题

```jsx
const o1 = {
	text: 'o1',
  fn: function() { 
  	return this.text
  }
}

const o2 = {
	text: 'o2',
  fn: function() {
  	return o1.fn()
  }
}

const o3 = {
	text: 'o3',
  fn: function() {
  	var fn = o1.fn
    return fn()
  }
}
console.log(o1.fn())
console.log(o2.fn())
console.log(o3.fn())




```



### 美团二面

1. 自我介绍
2. 诸多业务问题
3. 你期望的业务场景或者工作环境
4. js为什么会有回调地狱呢
5. 为什么java没有回调地狱
6. promise.all返回的是什么
7. promise和async你觉得差异点是什么
8. 算法1:rgb转16进制函数
9.  算法2:

```jsx
//实现一个retry函数
//如果fn返回成功，则打印一下，最终结果成功
//如果fn返回失败，则打印times下，最终结果失败
retry(fn,times)
retry(() => {
  console.log('doing')
  return Promise.reject(Error('done'))
}, 3)

retry(() => {
  console.log('doing')
  return Promise.resolve('done')
}, 3)

```

10. 打印题

```jsx
var a = 20;
var test = {
  a: 40,
  init: () => {
    console.log(this.a);
    function go() {
      console.log(this.a);
    }
    go.prototype.a = 50;
    return go;
  }
};

var p = test.init();
p();
new p()

```



### 去哪儿网一面

1. 自我介绍
2. 说一下项目中遇到的挑战和你认为的亮点
3. 能说一下你用mvc模式重构node业务代码的大概方向和效果吗
4. 说下跨域
5. 这个项目里前后端联调的话，有问题一般怎么排查(表示基本都是自己写)
6. 追问:为什么是都要自己写呢?(相对偏向全栈，人少)
7. 感觉你个人比较喜欢node,是想往这个方向发展吗
8. 对技术栈或新技术上是怎样的一个态度
9.  项目中写的css多吗，主要是哪些？(说了less,css,styled-components)
10. 有没有接触过移动端，小程序，App这些场景
11. 有在面其他公司吗?进展?
12. 为什么刚工作不久离职了
13. 你说离职是追求技术的突破，能解释下你想要的是怎样的吗
14. 对于公司和业务部门，你更倾向哪一边的考虑(类比了选学校和选专业)
15. 事件循环的打印题(比较基础)

```jsx
setTimeout(() => {
    console.log(1)
}, 0)
new Promise((resolve) => {
    console.log(2)
    for (let i = 0; i < 10000; i++) {
        if (i === 9999) { resolve() }
    }
    console.log(3)
}).then(() => {
    console.log(4)
})
console.log(5)
```

### 去哪儿网二面


1. 自我介绍
2. 为什么刚工作不久就离职
3. 诸多业务问题
4. 说下你擅长的
5. 解释下重绘和回流
6. 说一下你知道的浏览器渲染相关的点
7. 你觉得有哪些优势
8. 平时怎么学习的
9. 说下tls握手
10. 还有在面其他公司吗？
11. 前端如何做性能优化
12. 算法1:数组中出现最多的数字
13. 算法2:斐波那契数列
14. 闲聊:你觉得你的缺点是什么