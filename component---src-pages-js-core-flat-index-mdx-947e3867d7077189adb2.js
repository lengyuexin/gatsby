(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{BK8p:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t("shca"),r=(t("xwgP"),t("N0F1")),c=t("Hv6d"),s=t("JLKy"),l={},b={_frontmatter:l},i=c.default;function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)(i,Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",null,"原生flat"),Object(r.b)(s.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]\nary = ary.flat(Infinity);\n"))),Object(r.b)("h3",null,"replace+split+map"),Object(r.b)(s.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]\nlet str = JSON.stringify(ary);\nstr.replace(/\\[|\\]/g, '').split(',').map(item=>+item)\n"))),Object(r.b)("h3",null,"递归"),Object(r.b)(s.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"let result = [];\nlet fn = function(ary) {\n  for(let i = 0; i < ary.length; i++) {\n    let item = ary[i];\n    if (Array.isArray(ary[i])){\n      fn(item);\n    } else {\n      result.push(item);\n    }\n  }\n}\n"))))}u.isMDXComponent=!0},shca:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-js-core-flat-index-mdx-947e3867d7077189adb2.js.map