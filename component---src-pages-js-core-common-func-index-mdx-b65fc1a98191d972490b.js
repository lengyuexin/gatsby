(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{ZzAm:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return i}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var a=t("7ljp"),r=t("Hv6d"),c=t("JLKy");var l={},s={_frontmatter:l},o=r.a;function i(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,r={},c=Object.keys(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,["components"]);return Object(a.b)(o,Object.assign({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"防抖"),Object(a.b)(c.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const debounce = (fn, wait) => {\n    let timer = null\n    return (...args) => {\n        clearTimeout(timer)\n        timer = setTimeout(() => {\n            fn(...args)\n        }, wait)\n\n    }\n}\n"))),Object(a.b)("h2",null,"节流"),Object(a.b)(c.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const throttle = (fn, wait) => {\n    let lock = false\n    return (...args) => {\n        if (lock) return\n        lock = true\n        setTimeout(() => {\n            fn(...args)\n            lock = false\n        }, wait)\n    }\n}\n"))),Object(a.b)("h2",null,"防抖+节流"),Object(a.b)(c.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const handle=(fn, delay)=> {\n    let last = 0, timer = null;\n    return (...args) => {\n        let now = new Date();\n        if (now - last < delay) {\n            clearTimeout(timer);\n            timer = setTimeout(() => {\n                last = now;\n                fn(...args);\n            }, delay);\n        } else {\n            last = now;\n            fn(...args);\n        }\n    }\n}\n"))),Object(a.b)("h2",null,"图片懒加载"),Object(a.b)(c.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\n// 获取所有的图片标签\nvar imgs = document.getElementsByTagName('img')\n// 获取可视区域的高度\nvar clientHeight = document.documentElement.clientHeight\n// num用于统计当前显示到了哪一张图片，避免重复加载\nvar num = 0\nfunction lazyload() {\n    for (let i = num; i < imgs.length; i++) {\n\n        // 可视区域高度>=元素顶部距离可视区域顶部的高度 ,显示图片\n        if (clientHeight >= imgs[i].getBoundingClientRect().top) {\n            // 地址替换 \n            imgs[i].src = imgs[i].getAttribute('data-src');\n            // 更新num\n            num += 1;\n        }\n    }\n}\n\n//初始化\nlazyload();\n\n"))),Object(a.b)("h2",null,"图片预加载"),Object(a.b)(c.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'\nfunction preload() {\n    const img = document.querySelector("img")\n  \n    //定义图片加载数量\n    let count = 0;\n    //定义当前图片数组长度\n    const len = imgs.length;\n    //遍历图片数组，引入预加载处理\n    imgs.forEach(item => {\n        /*代理模式体现--start*/\n        const imgObj = new Image();\n        //使用imgObj模拟真实img完成加载\n        imgObj.onload = () => {\n            //所有图片加载完成，将loading替换成第一张图\n            if (count === len - 1) {\n                img.src = imgs[0];\n            }\n            // 每张图片加载完成，count+1\n            count++\n        }\n        //使用imgObj模拟真实img发起请求\n        imgObj.src = item;\n        /*代理模式体现--end*/\n    })\n}\n\n\n'))),Object(a.b)("h2",null,"深拷贝"),Object(a.b)(c.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\nfunction clone(target, map = new Map()) {\n    if (typeof target === 'object') {\n        let cloneTarget = Array.isArray(target) ? [] : {};\n        if (map.get(target)) {\n            return map.get(target);\n        }\n        map.set(target, cloneTarget);\n        for (const key in target) {\n            cloneTarget[key] = clone(target[key], map);\n        }\n        return cloneTarget;\n    } else {\n        return target;\n    }\n};\n"))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-js-core-common-func-index-mdx-b65fc1a98191d972490b.js.map