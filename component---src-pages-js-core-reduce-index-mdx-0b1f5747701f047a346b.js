(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{BiVN:function(e,t,n){},EsZP:function(e,t,n){},Hv6d:function(e,t,n){"use strict";var a=n("KPh1"),r=n("qRUh"),c=n("xwgP"),l=n.n(c),s=n("Wbzz"),o=n("d33t"),i=n.n(o),u=(n("vPK/"),n("Zttt")),p=n("EYWl"),b=n("JLKy"),m=n("k7Sn"),f=function(e){return m.supportedLanguages[e].replace(/ /g," ")},g=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,r=e.editUrl;return l.a.createElement("div",{className:"translations"},l.a.createElement(b.a,{style:{fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}},t.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,"Translated by readers into: "),t.map((function(e,r){return l.a.createElement(l.a.Fragment,{key:e},e===n?l.a.createElement("b",null,f(e)):l.a.createElement(s.Link,{to:a(e)},f(e)),r===t.length-1?"":" • ")}))),"zh-hans"!==n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.Link,{to:a("zh-hans")},"Read the original")," • ",l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • ",l.a.createElement(s.Link,{to:"/"+n},"View all translated posts")," ")))},t}(l.a.Component),d=n("L6NH"),h=n("p3AD");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props,t=e.pageContext,a=e.children,r=e.location,c=e.previous,o=e.next,b=e.translations,m=i()(this.props,"queryData.site.siteMetadata.title"),j=t.langKey,y=t.slug;b&&(b=b.slice()).sort((function(e,t){return f(e)<f(t)?-1:1})),function(e){switch(e){case"ru":case"bg":n("EsZP"),n("s85H");break;case"uk":n("EsZP"),n("s85H"),n("Mq6Z"),n("e/YJ");break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":n("Mq6Z"),n("e/YJ");break;case"vi":n("Vjog"),n("Pf5Y");break;case"fa":n("BiVN");break;case"ar":n("xpFW")}}(j);var E=function(e,t){var n=e.replace(t+"/","");return function(e){return"zh-hans"===e?n:""+e+n}}(y,j),x=E("en"),v="https://github.com/gaearon/overreacted.io/edit/master/src/pages/"+x.slice(1,x.length-1)+"/index"+("zh-hans"===j?"":"."+j)+".md";return l.a.createElement(u.a,{location:r,title:m},l.a.createElement(p.a,{lang:j,title:t.frontmatter.title,description:t.frontmatter.spoiler,slug:y,date:t.frontmatter.date}),l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(h.a)(24)}},l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h1",{style:{color:"var(--textTitle)"}},t.frontmatter.title),l.a.createElement("p",{style:O(O({},Object(h.b)(-.2)),{},{display:"block",marginBottom:Object(h.a)(1),marginTop:Object(h.a)(-.8)})},Object(d.a)(t.frontmatter.date,j)),b&&b.length>0&&l.a.createElement(g,{translations:b,editUrl:v,languageLink:E,lang:j})),l.a.createElement("div",null,a)),l.a.createElement("aside",null,l.a.createElement("nav",null,l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,c&&l.a.createElement(s.Link,{to:c.fields.slug,rel:"prev",style:{marginRight:20}},"← ",c.frontmatter.title)),l.a.createElement("li",null,o&&l.a.createElement(s.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))))))},t}(l.a.Component);t.a=function(e){return l.a.createElement(s.StaticQuery,{query:"2199005656",render:function(t){return l.a.createElement(y,Object.assign({queryData:t},e))}})}},Mq6Z:function(e,t,n){},NIJO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n("shca"),r=(n("xwgP"),n("N0F1")),c=n("Hv6d"),l=n("JLKy"),s={},o={_frontmatter:s},i=c.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(i,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",null,"格式转换"),Object(r.b)("p",null,'[ "xx1=a", "xx2=b" ]',' => { "xx1": "a", "xx2": "b" }'),Object(r.b)(l.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'["xx1=a", "xx2=b"].reduce((pre, cur) => {\n  const [k, v] = cur.split("=");\n  pre[k] = v;\n  return pre;\n}, {});\n'))),Object(r.b)("h3",null,"数组对象去重"),Object(r.b)(l.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"var arr=[\n    {\n      name:'tom',age:18,\n    },\n    {\n      name:'tom',age:18,\n    },\n    {\n      name:'jack',age:18,\n    },\n]\n\nfunction keepSingle(arr = [],field='name') {\n  let obj = {};\n  let res= arr.reduce( (item, next)=> {\n    if(!obj[next[field]]){\n        obj[next[field]] = true\n        item.push(next);\n    }\n    return item;\n  }, []);\n\n  obj=null\n  return res\n}\n"))),Object(r.b)("h3",null,"redux-compose"),Object(r.b)(l.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\nfunction compose(...funcs){\n\n  if (funcs.length === 0) {\n    return arg => arg\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0]\n  }\n\n  return funcs.reduce((a,b)=>(...args)=>{a(b(...args))})\n\n}\n\n"))))}u.isMDXComponent=!0},Pf5Y:function(e,t,n){},Vjog:function(e,t,n){},"e/YJ":function(e,t,n){},k7Sn:function(e,t){t.supportedLanguages={en:"English","zh-hans":"简体中文"}},s85H:function(e,t,n){},shca:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},"vPK/":function(e,t,n){},xpFW:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-js-core-reduce-index-mdx-0b1f5747701f047a346b.js.map