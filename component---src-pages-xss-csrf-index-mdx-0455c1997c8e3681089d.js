(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{BiVN:function(e,t,n){},EsZP:function(e,t,n){},Hv6d:function(e,t,n){"use strict";var a=n("KPh1"),r=n("qRUh"),l=n("xwgP"),c=n.n(l),o=n("Wbzz"),s=n("d33t"),i=n.n(s),u=(n("vPK/"),n("Zttt")),b=n("EYWl"),p=n("JLKy"),m=n("k7Sn"),f=function(e){return m.supportedLanguages[e].replace(/ /g," ")},g=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,r=e.editUrl;return c.a.createElement("div",{className:"translations"},c.a.createElement(p.a,{style:{fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}},t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Translated by readers into: "),t.map((function(e,r){return c.a.createElement(c.a.Fragment,{key:e},e===n?c.a.createElement("b",null,f(e)):c.a.createElement(o.Link,{to:a(e)},f(e)),r===t.length-1?"":" • ")}))),"zh-hans"!==n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(o.Link,{to:a("zh-hans")},"Read the original")," • ",c.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • ",c.a.createElement(o.Link,{to:"/"+n},"View all translated posts")," ")))},t}(c.a.Component),O=n("L6NH"),j=n("p3AD");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props,t=e.pageContext,a=e.children,r=e.location,l=e.previous,s=e.next,p=e.translations,m=i()(this.props,"queryData.site.siteMetadata.title"),d=t.langKey,y=t.slug;p&&(p=p.slice()).sort((function(e,t){return f(e)<f(t)?-1:1})),function(e){switch(e){case"ru":case"bg":n("EsZP"),n("s85H");break;case"uk":n("EsZP"),n("s85H"),n("Mq6Z"),n("e/YJ");break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":n("Mq6Z"),n("e/YJ");break;case"vi":n("Vjog"),n("Pf5Y");break;case"fa":n("BiVN");break;case"ar":n("xpFW")}}(d);var k=function(e,t){var n=e.replace(t+"/","");return function(e){return"zh-hans"===e?n:""+e+n}}(y,d),E=k("en"),S="https://github.com/gaearon/overreacted.io/edit/master/src/pages/"+E.slice(1,E.length-1)+"/index"+("zh-hans"===d?"":"."+d)+".md";return c.a.createElement(u.a,{location:r,title:m},c.a.createElement(b.a,{lang:d,title:t.frontmatter.title,description:t.frontmatter.spoiler,slug:y,date:t.frontmatter.date}),c.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(j.a)(24)}},c.a.createElement("article",null,c.a.createElement("header",null,c.a.createElement("h1",{style:{color:"var(--textTitle)"}},t.frontmatter.title),c.a.createElement("p",{style:h(h({},Object(j.b)(-.2)),{},{display:"block",marginBottom:Object(j.a)(1),marginTop:Object(j.a)(-.8)})},Object(O.a)(t.frontmatter.date,d)),p&&p.length>0&&c.a.createElement(g,{translations:p,editUrl:S,languageLink:k,lang:d})),c.a.createElement("div",null,a)),c.a.createElement("aside",null,c.a.createElement("nav",null,c.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},c.a.createElement("li",null,l&&c.a.createElement(o.Link,{to:l.fields.slug,rel:"prev",style:{marginRight:20}},"← ",l.frontmatter.title)),c.a.createElement("li",null,s&&c.a.createElement(o.Link,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →")))))))},t}(c.a.Component);t.a=function(e){return c.a.createElement(o.StaticQuery,{query:"2199005656",render:function(t){return c.a.createElement(y,Object.assign({queryData:t},e))}})}},Mq6Z:function(e,t,n){},Pf5Y:function(e,t,n){},Vjog:function(e,t,n){},"e/YJ":function(e,t,n){},k7Sn:function(e,t){t.supportedLanguages={en:"English","zh-hans":"简体中文"}},pAmV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n("shca"),r=(n("xwgP"),n("N0F1")),l=n("Hv6d"),c=n("JLKy"),o={},s={_frontmatter:o},i=l.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(i,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"XSS"),Object(r.b)("h3",null,"描述"),Object(r.b)(c.a,{mdxType:"P"},"XSS全称是CrossnSite Scripting(跨站脚本)，为了和CSS区分，故叫它XSS。 XSS攻击是指浏览器中执行恶意脚本(无论是跨域还是同域)，从而拿到用户的信息并进行操作。 如:窃取Cookie,监听用户行为(如输入账号密码后直接发送到黑客服务器),修改 DOM 伪造登录表单,生成浮窗广告。"),Object(r.b)("h3",null,"类型"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"XSS攻击的实现主要有三种方式:存储型、反射型和文档型")),Object(r.b)(c.a,{mdxType:"P"},Object(r.b)("p",null,"存储型就是将恶意脚本存储到数据库，服务端读取后返回，客户端执行。常见的场景是留言评论区提交一段脚本代码，如果前后端没有做好转义的工作，那评论内容存到了数据库。\n在页面渲染过程中直接执行, 相当于执行一段未知逻辑的JS代码，安全性得不到保障。",Object(r.b)("br",null),"\n反射型XSS指的是恶意脚本作为网络请求的参数，经过服务器，然后再反射到HTML文档中",Object(r.b)("br",null),"\n文档型的XSS攻击并不会经过服务端，而是作为中间人的角色，在数据传输过程劫持到网络数据包，然后修改里面的html文档！")),Object(r.b)("h3",null,"防范"),Object(r.b)(c.a,{mdxType:"P"},"对用户的输入进行转义  ",Object(r.b)("br",null),"CSP内容安全策略限制其他域下的资源加载,禁止向其它域提交数据,提供上报机制",Object(r.b)("br",null),"利用HttpOnly,使得js无法操控cookie",Object(r.b)("br",null)),Object(r.b)("h2",null,"CSRF攻击"),Object(r.b)("h3",null,"描述"),Object(r.b)(c.a,{style:{background:"lightblue"},mdxType:"P"},"CSRF(Cross-site request forgery), 即跨站请求伪造，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户目前的登录状态发起跨站请求。 自动发GET(图片链接)请求获取个人信息,自动post表单提交进行转账汇款以及其他的恶意操作"),Object(r.b)("h3",null,"防范"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1. 利用Cookie的SameSite属性，可以设置为三个值:Strict、Lax和None")),Object(r.b)(c.a,{style:{background:"#4AC29A"},mdxType:"P"},"在Strict模式下，浏览器完全禁止第三方请求携带Cookie",Object(r.b)("br",null),"在None模式下，也就是默认模式，请求会自动携带上 Cookie",Object(r.b)("br",null),"在Lax模式，就宽松一点了，但是只能在 get 方法提交表单况或者a标签发送get请求的情况下可以携带Cookie"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.  验证来源站点")),Object(r.b)(c.a,{style:{background:"#4AC29A"},mdxType:"P"},"这就需要要用到请求头中的两个字段: Origin和Referer",Object(r.b)("br",null),"这两者都是可以伪造的，通过 Ajax 中自定义请求头即可，安全性略差。",Object(r.b)("br",null)),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3. CSRF Token")),Object(r.b)(c.a,{style:{background:"#4AC29A"},mdxType:"P"},"浏览器向服务器发送请求时，服务器生成一个字符串，将其植入到返回的页面中。",Object(r.b)("br",null),"浏览器发送请求，会带上这个字符串，然后服务器来验证是否合法，如果不合法则不予响应",Object(r.b)("br",null),"这个字符串就是CSRF Token，通常第三方站点无法拿到这个 token, 会被服务器给拒绝。"))}u.isMDXComponent=!0},s85H:function(e,t,n){},shca:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},"vPK/":function(e,t,n){},xpFW:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-xss-csrf-index-mdx-0455c1997c8e3681089d.js.map