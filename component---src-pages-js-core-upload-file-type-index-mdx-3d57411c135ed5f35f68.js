(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{TStu:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return i}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var l=t("7ljp"),r=t("Hv6d"),a=t("JLKy");var c={},b={_frontmatter:c},o=r.a;function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(l.b)(o,Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"前言"),Object(l.b)(a.a,{mdxType:"P"},"一般来说，对于上传的文件，都要做类型过滤，指定哪些类型能上传，哪些不能上传。 最容易想到的，也是相对常用的，是直接使用文件的拓展名。 但拓展名可以手动修改，做不到精准，比如把一个word文档由.doc改为.png"),Object(l.b)("h2",null,"解决方案"),Object(l.b)(a.a,{style:{background:"lightblue"},mdxType:"P"},"将上传文件转为二进制形式后，再获取其前四位头文件的十六进制编码， 根据这个就可以精准判定上传文件类型。 对于不符合上传格式要求的，直接在客户端做处理。"),Object(l.b)("h2",null,"html代码"),Object(l.b)("p",null,"这里只做演示，写的比较简单，可根据实际业务场景添加字段"),Object(l.b)(a.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<form id="form">\n <p><input type="file" name="file" multiple id=\'file\'></p>\n <p><input type="button" value="上传" id="btn"></p>\n</form>\n'))),Object(l.b)("h2",null,"js代码"),Object(l.b)(a.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"let form = document.getElementById('form'); \nlet btn = document.getElementById('btn'); \nlet f = document.getElementById('file'); \n\n"))),Object(l.b)("h2",null,"获取文件mime类型"),Object(l.b)("p",null,Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://blog.csdn.net/weixin_33826268/article/details/94604439"}),"https://blog.csdn.net/weixin_33826268/article/details/94604439")),Object(l.b)("h2",null,"getFileMimeType"),Object(l.b)(a.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"function getFileMimeType(file) {\n  const map = {\n      'FFD8FFE0': 'jpg',\n      '89504E47': 'png',\n      '47494638': 'gif',\n      \"52494646\": 'webp'\n  }\n\n  const reader = new FileReader();\n  reader.readAsArrayBuffer(file);\n  return new Promise((resolve, reject) => {\n      reader.onload = (event) => {\n        try {\n            let array = new Uint8Array(event.target.result);\n            array = array.slice(0, 4);\n            let arr = [...array]\n            let key = arr.map(item => item.toString(16)\n                .toUpperCase()\n                .padStart(2, '0'))\n                .join('')\n            resolve(map[key])\n\n        } catch (e) {\n            reject(e);\n        }\n      };\n  });\n}\n"))),Object(l.b)("h2",null,"上传逻辑"),Object(l.b)(a.a,{style:{background:"#FDB99B"},mdxType:"P"},Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\nbtn.onclick = function () {\n    if (f.files.length > 1) {\n        for (const file of f.files) {\n            upload(file)\n        }\n    } else {\n        upload(f.files[0])\n    }\n}\n\nfunction upload(file) {\n  getFileMimeType(file).then(res => {\n    if (res) {\n        let fd = new FormData(form);\n        let xhr = new XMLHttpRequest();\n        xhr.open(\"post\", '/api/uploadFiles');\n        xhr.send(fd);\n    } else {\n        alert('文件格式不符合上传要求')\n        f.value = ''\n        return\n    }\n\n  }).catch(err => {\n      console.log(err)\n  })\n}\n\n"))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-js-core-upload-file-type-index-mdx-3d57411c135ed5f35f68.js.map