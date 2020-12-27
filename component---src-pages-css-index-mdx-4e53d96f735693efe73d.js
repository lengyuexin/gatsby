(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{shca:function(n,t,e){"use strict";function a(n,t){if(null==n)return{};var e,a,c={},s=Object.keys(n);for(a=0;a<s.length;a++)e=s[a],t.indexOf(e)>=0||(c[e]=n[e]);return c}e.d(t,"a",(function(){return a}))},xgnf:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return b})),e.d(t,"default",(function(){return i}));var a=e("shca"),c=(e("xwgP"),e("N0F1")),s=e("Hv6d"),o=e("JLKy"),b={},l={_frontmatter:b},r=s.default;function i(n){var t=n.components,e=Object(a.a)(n,["components"]);return Object(c.b)(r,Object.assign({},l,e,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"html布局"),Object(c.b)(o.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<div class="father">\n   <div class="child">child</div>\n</div>\n'))),Object(c.b)("h2",null,"定位:方法一"),Object(c.b)(o.a,{style:{background:"lightblue"},mdxType:"P"},"绝对定位的子盒子相对父盒子定位，设置left，top为50%，子盒子左上角会在父盒子内水平垂直居中。 此时，再让左边距上边距偏离宽高的一半，则可使整个子盒子在父盒子内水平垂直居中。 这种方法的局限性是必须事先清楚子盒子的宽和高,因为涉及margin-left和margin-top的计算。"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"\n.father{\n  /* 关键代码 start*/\n  position: relative;\n  /* 关键代码 end*/\n  width:400px;\n  height:400px;\n  background-color:#333;\n  margin: 100px auto;\n}\n\n.child{\n    background-color: #fff;\n    /* 关键代码 start*/\n    position: absolute;\n    width:100px;\n    height:100px;\n    left:50%;\n    top:50%;\n    margin-left:-50px;\n    margin-top:-50px;\n    /* 关键代码 end*/\n}\n\n")),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/2020050710423273.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70",alt:"定位:方法一"}))),Object(c.b)("h2",null,"定位:方法二"),Object(c.b)(o.a,{style:{background:"lightblue"},mdxType:"P"},"绝对定位的子盒子相对父盒子定位，设置left，top,right,bottom为0，子盒子在父盒子左上角显示。 此时，再让margin自适应，则可使整个子盒子在父盒子内水平垂直居中。 这种方法的局限性是必须设置子盒子的宽和高，尽管不用于计算。"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"\n.child{\n    background-color: #fff;\n    /* 关键代码 start*/\n    width:100px;\n    height:100px;\n    position: absolute;\n    left:0;\n    top:0;\n    right:0;\n    bottom:0;\n    margin:auto;\n    /* 关键代码 end*/\n}\n\n")),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/2020050710423273.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70",alt:"定位:方法二"}))),Object(c.b)("h2",null,"定位:方法三"),Object(c.b)(o.a,{style:{background:"lightblue"},mdxType:"P"},"绝对定位的子盒子相对父盒子定位，设置left，top为50%，子盒子左上角会在父盒子内水平垂直居中。 此时，设置translate使其沿着XY轴偏移自身宽高的一半。 好处是不需要设置宽高，局限是存在兼容问题。"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),"\n.child{\n    background-color: #fff;\n    /* 关键代码 start*/\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%,-50%);\n    /* 关键代码 end*/\n}\n\n")),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20200507104607419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70",alt:"定位:方法三"}))),Object(c.b)("h2",null,"flex"),Object(c.b)(o.a,{style:{background:"lightblue"},mdxType:"P"},"将父盒子转为flex布局，设置主轴和侧轴元素居中对齐，则子盒子在父盒子中水平垂直居中。 局限性是存在兼容问题，好处是灵活简单。"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-css"}),".father{\n  width:400px;\n  height:400px;\n  background-color:#333;\n  margin: 100px auto;\n  /* 关键代码 start*/\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  /* 关键代码 end*/\n}\n.child{\n    background-color: #fff;\n}\n")),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20200507104607419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70",alt:"flex"}))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-css-index-mdx-4e53d96f735693efe73d.js.map