(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{Zf0p:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return u})),e.d(t,"default",(function(){return a}));e("rGqo"),e("yt8O"),e("Btvt"),e("RW0V"),e("91GP"),e("q1tI");var r=e("7ljp"),o=e("Hv6d"),c=e("JLKy");var u={},f={_frontmatter:u},b=o.a;function a(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,r,o={},c=Object.keys(n);for(r=0;r<c.length;r++)e=c[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,["components"]);return Object(r.b)(b,Object.assign({},f,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c.a,{mdxType:"P"},Object(r.b)("p",null,"函数执行时会形成一个私有作用域,也叫函数作用域。",Object(r.b)("br",null),"\n私有作用域内的形参或声明的变量称为私有变量,其变化与全局变量无关。",Object(r.b)("br",null),"\n如果当前作用域不存在该变量,说明是非私有变量,去上层作用域查找。",Object(r.b)("br",null),"\n如果上层作用域找不到该变量,查找上上层作用域,一直到顶层,还找不到就报错。",Object(r.b)("br",null),"\n这个查找过程类似一条链条,称为作用域链。",Object(r.b)("br",null),"\n定义当前函数的作用域就是该函数的上级作用域,与函数何处执行无关。")),Object(r.b)(c.a,{style:{background:"lightblue"},mdxType:"P"},Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"var a=10;\nfunction fn1(){\n    return function fn2(){\n        return function fn3(){\n            //这里的a会一直查找到挂载到window上的全局变量a\n            //fn3=>fn2=>fn1=>window\n           return a\n        }\n    }\n}\nfn1()()()\n\n\nvar count=10;\nfunction fn(){\n    var count=100;\n    return function(){\n        console.log(count)\n    }\n}\nvar f=fn();\nf();//定义f的作用域实际是fn函数,其上级作用域就是fn,此时count=100\n\n\n\n\nfunction fn(){\n    var i=10;\n    return function (n){\n        console.log(n+(++i))\n    }\n}\n\nvar f=fn();\nf(10)//21 私有作用域,计算后i值累加, i=11\nf(20) //32 私有作用域 ,此时i=11\nfn()(10) //21 独立私有作用域,执行完当前作用域销毁\nfn()(20) // 31 独立私有作用域,执行完当前作用域销毁\n\n\n\n\n"))))}a.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-js-core-scope-chain-index-mdx-a79291a3d10aa3105a15.js.map