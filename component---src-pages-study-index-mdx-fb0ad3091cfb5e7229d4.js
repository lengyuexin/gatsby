(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{BiVN:function(e,t,n){},EsZP:function(e,t,n){},Hv6d:function(e,t,n){"use strict";var a=n("KPh1"),l=n("qRUh"),r=n("xwgP"),b=n.n(r),c=n("Wbzz"),s=n("d33t"),u=n.n(s),p=(n("vPK/"),n("Zttt")),i=n("EYWl"),O=n("JLKy"),o=n("k7Sn"),j=function(e){return o.supportedLanguages[e].replace(/ /g," ")},g=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,l=e.editUrl;return b.a.createElement("div",{className:"translations"},b.a.createElement(O.a,{style:{fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}},t.length>0&&b.a.createElement(b.a.Fragment,null,b.a.createElement("span",null,"Translated by readers into: "),t.map((function(e,l){return b.a.createElement(b.a.Fragment,{key:e},e===n?b.a.createElement("b",null,j(e)):b.a.createElement(c.Link,{to:a(e)},j(e)),l===t.length-1?"":" • ")}))),"zh-hans"!==n&&b.a.createElement(b.a.Fragment,null,b.a.createElement("br",null),b.a.createElement("br",null),b.a.createElement(c.Link,{to:a("zh-hans")},"Read the original")," • ",b.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • ",b.a.createElement(c.Link,{to:"/"+n},"View all translated posts")," ")))},t}(b.a.Component),m=n("L6NH"),d=n("p3AD");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props,t=e.pageContext,a=e.children,l=e.location,r=e.previous,s=e.next,O=e.translations,o=u()(this.props,"queryData.site.siteMetadata.title"),f=t.langKey,N=t.slug;O&&(O=O.slice()).sort((function(e,t){return j(e)<j(t)?-1:1})),function(e){switch(e){case"ru":case"bg":n("EsZP"),n("s85H");break;case"uk":n("EsZP"),n("s85H"),n("Mq6Z"),n("e/YJ");break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":n("Mq6Z"),n("e/YJ");break;case"vi":n("Vjog"),n("Pf5Y");break;case"fa":n("BiVN");break;case"ar":n("xpFW")}}(f);var y=function(e,t){var n=e.replace(t+"/","");return function(e){return"zh-hans"===e?n:""+e+n}}(N,f),E=y("en"),v="https://github.com/gaearon/overreacted.io/edit/master/src/pages/"+E.slice(1,E.length-1)+"/index"+("zh-hans"===f?"":"."+f)+".md";return b.a.createElement(p.a,{location:l,title:o},b.a.createElement(i.a,{lang:f,title:t.frontmatter.title,description:t.frontmatter.spoiler,slug:N,date:t.frontmatter.date}),b.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(d.a)(24)}},b.a.createElement("article",null,b.a.createElement("header",null,b.a.createElement("h1",{style:{color:"var(--textTitle)"}},t.frontmatter.title),b.a.createElement("p",{style:h(h({},Object(d.b)(-.2)),{},{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-.8)})},Object(m.a)(t.frontmatter.date,f)),O&&O.length>0&&b.a.createElement(g,{translations:O,editUrl:v,languageLink:y,lang:f})),b.a.createElement("div",null,a)),b.a.createElement("aside",null,b.a.createElement("nav",null,b.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},b.a.createElement("li",null,r&&b.a.createElement(c.Link,{to:r.fields.slug,rel:"prev",style:{marginRight:20}},"← ",r.frontmatter.title)),b.a.createElement("li",null,s&&b.a.createElement(c.Link,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →")))))))},t}(b.a.Component);t.a=function(e){return b.a.createElement(c.StaticQuery,{query:"2199005656",render:function(t){return b.a.createElement(N,Object.assign({queryData:t},e))}})}},Mq6Z:function(e,t,n){},Pf5Y:function(e,t,n){},Vjog:function(e,t,n){},"e/YJ":function(e,t,n){},k7Sn:function(e,t){t.supportedLanguages={en:"English","zh-hans":"简体中文"}},"p/86":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n("shca"),l=(n("xwgP"),n("N0F1")),r=n("Hv6d"),b={},c={_frontmatter:b},s=r.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"缘起"),Object(l.b)("p",null,"在发了上一篇面试总结后，收获了一波流量(感谢转发的大佬们)。"),Object(l.b)("p",null,"有小读者在不同平台私信问我一些问题，主要是两个方面:面试进大厂该如何准备?如何学习?"),Object(l.b)("p",null,"本周双休，整理了下思路，安排。"),Object(l.b)("p",null,"希望本文对你有所帮助。"),Object(l.b)("h2",null,"给自己一个定位"),Object(l.b)("h3",null,"知己知彼"),Object(l.b)("p",null,"在考虑如何准备面试前，更应该思考的是自己现在处于什么层次。\n通过撸面经和多次面试能基本做到知彼，毕竟套路也就那些。\n但是很多人其实对自己的定位是不清楚的：主要表现为不知道自己想学什么，不知道自己擅长什么。"),Object(l.b)("p",null,"不清楚想学什么，就会漫无目的，容易变得懒散，鱼塘都没有鱼了也不想走。\n不知道自己擅长什么，面试就没办法引导面试官看到你的亮点。"),Object(l.b)("p",null,"面试关键点是避轻就重，突出你擅长的就好。对于不熟悉的轻描淡写，一笔带过完事。\n哪个是轻，哪个是重，完全取决于你简历和招聘岗位的要求。"),Object(l.b)("p",null,"对于面试，建议大家保持一个平稳的心态，面试是双向选择而非刻意刁难。\n当然，那种小气或者刷绩效不招人的除外。(少数)"),Object(l.b)("h3",null,"同与不同"),Object(l.b)("p",null,"我一直觉得每个人达到目标的方式是可以借鉴但不可复制的。\n以参加面试来说，可能两个人都是准备了三个月，套路也都是复习基础，刷题，撸源码。\n但结果可能截然不同，一个拿到满意offer，一个面试被吊打。"),Object(l.b)("p",null,"被吊打的主要原因应该就是对自己的不了解，从而复习无方向。\n感觉复习的很全面，但其实就是走马观花，蜻蜓点水。\n等到面试官一问，不是忘了就是组织不好语言，表达没有层次感。"),Object(l.b)("p",null,"这样每场面试下来会加剧自己的焦虑感，觉得自己是个只知道干饭摸鱼的小废物。\n这个时候不妨冷静下来问问自己:真的努力了？又或者仅仅只是看起来很努力？"),Object(l.b)("h3",null,"定位手段"),Object(l.b)("p",null,"什么才算清楚自己定位呢？\n知道自己投递岗位和自己能力匹配度，\n知道自己擅长的和不擅长的，\n能够在技术面后对自己能否通过有个数，\n这就是定位清晰。"),Object(l.b)("p",null,"面试前，大家可以通过一些手段对自己的当前能力做一个衡量，搞清楚定位。\n衡量手段也是因人而异的，我以自身为例，大家可以做个参考。\n根据面试岗位的需求，涉及的方向和内容会有些许差异。"),Object(l.b)("p",null,"我的定位手段是：",Object(l.b)("strong",{parentName:"p"},"分类细化，查漏补缺，能写必写，多多益善。")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"分类细化"),"：面试前我在掘金和牛客网找了几篇大厂面经，根据面试题种类划分考察大方向，\n做这一步的目的就是在给自己确定复习大纲。"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"方向"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"内容")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"前端基础"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于html,css,css3,js,es6+,less,scss,css in js")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"框架及其生态的应用和原理"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于react,redux,react-router,mobx,vue,vuex,vue-router")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"数据请求"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于axios,xhr,fetch,rpc")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"项目构建"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于vite,webpack,rollup,parcel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"数据结构"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"前端常问到的是数组，字符串，树，哈希表，链表")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"算法"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"国内面试时的算法通常不会太复杂，剑指offer即可")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"服务端"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"大多是nodejs(及其web框架,express,koa2,egg...)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"部署和运维"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于nginx配置，linux常用命令，shell脚本")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"浏览器"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于重绘，重排，事件循环，同源策略，页面渲染过程，强缓存和协商缓存")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"v8"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于内存碎片，垃圾回收，数据存储，函数栈调用，快慢属性，JIT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"计算机网络"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于应用层协议举例，http版本对比，OSI网络分层模型，tcp握手和挥手，tls建立安全层")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"操作系统"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"包括但不限于死锁的理解，进程通信方式，进程和线程关系，磁盘调度算法")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"查漏补缺"),"：自问自答，直到每一个知识点能条理清晰的用自己的话表达出来(不要为了背而背)，\n记笔记(推荐typora)并配合脑图(推荐processOn,xmind,百度脑图都可以)食用更佳。切记只停留在看的层面！！！\n如果只是看，面试前想看点东西都不知道看什么。\n不留痕迹的复习，过一段时间就会忘了，而且无迹可寻。\n根据我的实践来看，大脑很善于拍照记忆，笔记和脑图都是很有帮助的。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"能写必写"),"：能记笔记的就记笔记，能写代码的就写代码，不要偷懒。\n如果没有电脑在身边，又不想用手机写，那就大脑默写。\n如果卡住了，可以用手机自带的备忘录或者便签把卡住的部分记录下来，关键词就好，之后用电脑再去尝试。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"多多益善"),"：量变引起质变，不熟悉的部分一定要多敲代码。\n建议一开始不要用编辑器的自动提示功能,尤其是某些API和CSS属性,全拼最好。\n这样可以避免面试时候某个方法名或者属性名忘了而卡住的尴尬。\n也可以提高自己在白纸和白板上写代码的能力(猿辅导就是白纸上写)。\n等熟悉之后就可以开提示了，此时在意的是开发效率，再全拼意义不大。"),Object(l.b)("h2",null,"面试技巧"),Object(l.b)("p",null,"总的来说面试分为三个阶段：面试前准备，面试中应答，面试后复盘。\n下面我将根据不同的面试阶段，来分享一些小技巧给大家，可以当个参考。"),Object(l.b)("h3",null,"面试前准备的小技巧"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"集中刷目标公司的面经"),"。面经最好涉及不同部门，不同招聘类型(社招/校招/实习)。\n这样可以更综合性的把控这家公司的面试出题方向，方便有针对性的准备面试。\n不要总想着什么都顶级再去面试，最好的时机就是你恰好能进的时机。\n好家伙，明明60级就能过的活动任务，你非要100级再去，过肯定比60级时候好过，但是活动也可能结束了啊。\n先在60级拿到活动奖励，很有可能再升级到100级会更快的。\n殊途同归，也要考虑最短路径算法。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"了解岗位空缺程度"),"。面试前可以通过各大社区找到能内推你的人，了解下岗位空缺程度。\n这样是为了避免出现很多人争一个岗位的情况，和过独木桥没什么区别。虽然刺激，但有点冒险。\n过了也不可避免的被和其他候选人做性价比的比对，想来多少会有些不舒服吧。"),Object(l.b)("h3",null,"面试中应答的小技巧"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"实事求是且客观陈述"),"。对于你会的问题，自信表达就完事了。\n如果是你不会的，不要不懂装懂，一旦面试官深挖，尴尬的还是你自己。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"在面试中学习"),"。对于不会但有点思路的，哪怕不确定也可以说下你的想法。\n接下来就可以很自然的顺着这个思路去问面试官的想法，美其名曰，请教。\n如果不是时间问题，基本上面试官都会告诉你的。\n到这一步，不管你面试过没过，都学到了新的东西。\n在面试中一次次的突破，也是成长。正所谓战斗中破局，愈战愈勇。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"果断干脆"),"。对于闻所未闻的，就说没接触过，下去后了解一下即可。\n一般面试官也不会在再深入，直接下一个问题。\n注意，这里是面试时候一笔带过，下去后还确实要看的，因为下一场面试可能还会遇到。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"转移战场"),"。切记，面试应该是你的主场，要学会引导面试官问你擅长的。\n如果你没把握主动权，就会被面试官牵着走，这对你很不利。\n一旦面试官问的都是你的盲区，而你又没表现出什么亮点，基本凉了。\n那么如何转移呢？\n举个例子：我用node比较多，当面试官问我pm2内部机制的时候，我第一反应是不清楚，\n但是没直接说不会，想了想pm2可以开cluster模式，而刚好node有这个核心模块。\n于是乎，我展开说了一下cluster的使用，并写了一下示例代码，面试官很满意的说可以。"),Object(l.b)("h3",null,"面试后复盘的小技巧"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"拍照式记忆")),Object(l.b)("p",null,"我的面经应该是大厂面经最为综合的，基本上每一个问题都有记录下来。\n有人好奇我是怎么都记住的？录音？面试时记笔记？\n其实并没有，我是比较擅长拍照式记忆的。\n面试结束后，我会回顾整个面试流程，自然而然的面试问题也就出来了。\n我不确定大家是否适用这个方法，大脑是有这方面倾向的，但也需要一定练习。\n如果不适用，可以考虑录音，或者把面试时候卡住的部分写个关键词，结束后再看。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"反杀")),Object(l.b)("p",null,"一般来说，大厂都是有面试记录和面试评价的，各个部门共享。\n所以你上一轮面试没回答上的，一定要去搞懂，争取下次问到就是你的亮点。\n努力避免那种出原题也不会的尴尬局面。"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"轮次比较")),Object(l.b)("p",null,"如果你已经经历了同一家公司的一面，二面。\n那建议你对一二面题目类型，侧重点做一个归纳总结。\n这样对后续面试可能出现的题能有个大概预判，提前准备。\n考试都可以猜题，面试也可以的。"),Object(l.b)("h2",null,"如何学习"),Object(l.b)("h3",null,"明确方向，建立知识体系"),Object(l.b)("p",null,"学任何东西，我觉得建立属于自己的知识体系都非常重要。"),Object(l.b)("p",null,"如果你是零基础或者刚学前端不久，那可以去掘金找找其他大佬的学习方向图谱。"),Object(l.b)("p",null,"如果已经工作了一定年限，就可以按个人喜好或者团队业务方向，定制自己要深入的方向。"),Object(l.b)("p",null,"如果都不满意，就面向面试学习，直接撸面经，哪里不会学哪里。"),Object(l.b)("p",null,"不建议萌新这么搞，可能看不懂题。"),Object(l.b)("p",null,"但其实，殊途同归的，前端面试考察点也就那几个大方向，我更想说的是深度和广度的权衡。"),Object(l.b)("h3",null,"深度or广度"),Object(l.b)("p",null,"对于刚毕业，刚入行，工作不足一年的前端来说，广度的优势更明显。\n比如出现一个bug，你知道这个bug如何修复就可以了，暂且不去研究为什么会出现这个bug。\n广度足够，基础搬砖是够用的。\n扩充也很简单——通过多次重复将某个技术熟练使用或将某个知识点牢记。"),Object(l.b)("p",null,"随着工龄的增长和业务复杂度的提高，对个人能力开始偏向深度，就是要知其然并之其所以然。\n大厂内很多东西不是直接用开源库，而是二次封装，这就需要对某一领域了解足够深。\n扩充在大佬看来也很简单——多看别人写的优秀代码，并加以思考，最后实践。"),Object(l.b)("h3",null,"知识是检索的"),Object(l.b)("p",null,"在精力有限的情况下，建议确保你接收的是能用且常用的知识,不常用的需要再去查文档。\n比如使用webpack，配置确实很多，但主要东西就是plugin和loader。\n你只需知道常用的有哪些，如何实现一个自己的plugin和loader即可。\n不需要把每个plugin和loader的源码都看一遍。"),Object(l.b)("p",null,"如果说某个loader不符合你需求，你再去看它的源码实现，改改搞成自己想要的。\n这样在这个上边花费的时间就是很值得的，因为这是落实到了业务解决方案上。"),Object(l.b)("p",null,"曾参加过磐冲大佬组织的直播面试，有个模式我十分认同。"),Object(l.b)("p",null,"业务开发--\x3e发现痛点--\x3e分析原因--\x3e解决问题--\x3e归纳总结 "),Object(l.b)("p",null,"在分析原因并解决问题的环节，就涉及到了相关知识的检索。\n此外，归纳总结的文档也可以加一个常见问题的链接。\n如果有其他人遇到同样问题，那又是一次按需检索。"),Object(l.b)("p",null,"在这样一种模式中很好的体现出知识是检索的，也能看出技术是为业务而服务的。\n与此同时，这种业务方案的积累，岂不也是对知识深度的一次扩充？"),Object(l.b)("h2",null,"靠实力碰运气"),Object(l.b)("p",null,"很多时候，面试也是很讲究运气的。\n一个能力和你相当甚至不如你的小伙伴和你面同一个岗位，他能拿offer，而你一面被刷，很正常的。\n原因有很多啊，年龄，性别，颜值，出题的难易度，这都是不确定性因素。"),Object(l.b)("p",null,"不确定性因素我们是没办法左右的，哪有绝对的公平。\n也不要过于羡慕嫉妒恨，平常心就好。"),Object(l.b)("p",null,"运气，即使到了。实力不够，有个锤子用？\n想起了我九月份收到头条面试邀约，一周后又面抖音。\n从简历筛选上，我是幸运的。\n但是太菜，还是被爆锤，想哭..."),Object(l.b)("p",null,"之后就是发愤图强，闭关修炼。"),Object(l.b)("p",null,"12月再战，能力有了，运气又来了。"),Object(l.b)("p",null,"七厂同约，所面皆过，一路横扫。"),Object(l.b)("p",null,"比起虚无缥缈的运气，还是靠实力更靠谱，面试也更有底气。"),Object(l.b)("h2",null,"再会"),Object(l.b)("p",null,"情如风雪无常，"),Object(l.b)("p",null,"却是一动既殇。"),Object(l.b)("p",null,"感谢你这么好看还来阅读我的文章，"),Object(l.b)("p",null,"我是冷月心，下期再见。"))}u.isMDXComponent=!0},s85H:function(e,t,n){},shca:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,"a",(function(){return a}))},"vPK/":function(e,t,n){},xpFW:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-study-index-mdx-fb0ad3091cfb5e7229d4.js.map