(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{NenW:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return u})),e.d(n,"default",(function(){return l}));var c=e("shca"),b=(e("xwgP"),e("N0F1")),a=e("Hv6d"),r=e("JLKy"),u={},p={_frontmatter:u},o=a.default;function l(t){var n=t.components,e=Object(c.a)(t,["components"]);return Object(b.b)(o,Object.assign({},p,e,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"成因"),Object(b.b)(r.a,{style:{background:"lightblue"},mdxType:"Panel"},"HTTP传输是基于请求-响应模式，报文必须是一发一收。 每个请求都在一个队列中维护，先进先出。 如果队首的请求处理太慢，就会阻塞后面请求的处理。 由此，就此形成了队头阻塞。"),Object(b.b)("h2",null,"解决方案"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"域名分片")),Object(b.b)(r.a,{mdxType:"Panel"},"增加多个域名，每个域名一次最多六个tcp连接，理论上支持的最大并发tcp连接数是6n"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"http/2多路复用")),Object(b.b)(r.a,{mdxType:"Panel"},"将报文转成具有id标识的二进制数据帧，接收后按照id组合成完整报文,全过程在同一个tcp连接上完成双向数据帧传输"),Object(b.b)("h2",null,"注意"),Object(b.b)(r.a,{style:{background:"pink"},mdxType:"Panel"},"以上解决方案都是针对应用层，不是传输层(tcp)。tcp层面的队头阻塞是如果前一个报文没有收到便不会将后面收到的报文上传给 HTTP。 根本上解决需要更换协议，如换成udp。"))}l.isMDXComponent=!0},shca:function(t,n,e){"use strict";function c(t,n){if(null==t)return{};var e,c,b={},a=Object.keys(t);for(c=0;c<a.length;c++)e=a[c],n.indexOf(e)>=0||(b[e]=t[e]);return b}e.d(n,"a",(function(){return c}))}}]);
//# sourceMappingURL=component---src-pages-network-http-team-leader-blocked-index-mdx-3fda0ad3d7a56a3c982d.js.map