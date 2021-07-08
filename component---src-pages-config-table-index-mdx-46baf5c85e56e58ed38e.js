(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{sCTT:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return p}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var a=t("7ljp"),s=t("Hv6d");var l={},c={_frontmatter:l},b=s.a;function p(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,s={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,["components"]);return Object(a.b)(b,Object.assign({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"前言"),Object(a.b)("p",null,"最近在做的业务中涉及到",Object(a.b)("strong",{parentName:"p"},"多分支组合条件"),"的情况，频繁用if else 或者switch case 手动判断每个条件实在是有些不够优雅，也太过于硬编码。"),Object(a.b)("p",null,"深思许久，就那么一瞬间，灵光一闪，想起了实习时候导师教过的",Object(a.b)("strong",{parentName:"p"},"配置表思维"),"，一阵改造后，直呼真香！！！"),Object(a.b)("p",null,"今天我们就来聊一下什么是快乐星球！"),Object(a.b)("p",null,"奥，不对，今天我们就来聊一下",Object(a.b)("strong",{parentName:"p"},"什么是配置表思维，适用场景以及如何使用。")),Object(a.b)("h2",null,"什么是配置表思维？"),Object(a.b)("p",null,"简单来说，配置表思维就是",Object(a.b)("strong",{parentName:"p"},"预先定义逻辑代码，将手动操控换成自动匹配"),"。"),Object(a.b)("p",null,"更细致点说，就是将原本需要手动处理的多分支或者批量数据的业务逻辑代码抽象到一个配置映射或者配置列表中，当条件匹配时自动执行相关业务代码。前者多表现为对象，后者多表现为数组对象。"),Object(a.b)("h2",null,"配置表思维适用场景是什么？"),Object(a.b)("p",null,"配置表思维其实能覆盖很多场景。结合我的使用经验来看，在处理多分支场景和批量数据渲染的时候是效果比较明显的。理论就不多说了，一千个读者就有一千个哈姆雷特。等看完这篇文章，你理解后是什么它就是什么。"),Object(a.b)("h2",null,"配置表思维怎么用？"),Object(a.b)("p",null,"针对上述提到的两种情况，分别给出两段示例代码。"),Object(a.b)("h3",null,"多分支组合条件"),Object(a.b)("p",null,"给定如下场景：语数英三门科目作为数据来源，分别具有数值，排行，周期这三个维度。"),Object(a.b)("p",null,"需求是根据数据和维度的组合结果获取预期的视图。"),Object(a.b)("p",null,"前端该怎么处理？后端又该怎么处理？"),Object(a.b)("p",null,Object(a.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210509092925780.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70",alt:null}))),Object(a.b)("p",null,"看到这里，第一个明显的问题就抛出来了: 数据和维度的组合不同，",Object(a.b)("strong",{parentName:"p"},"筛选条件"),"也不同。这部分该如何控制呢？跟着感觉走就是if else 或者 switch case 。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"if(dataType ==='Chinese' && dimension ==='value'){\n    //渲染学生列表单选下拉框\n}else if(dataType ==='Chinese' && dimension==='ranking'){\n    //渲染学生列表多选下拉框\n}else if(dataType ==='Chinese' && dimension==='cycle'){\n    //渲染学生列表多选下拉框\n    //渲染历史月份周期单选下拉框\n}\n...\n")),Object(a.b)("p",null,"这个场景下数据和维度实际上3 x 3的组合，所以有九条分支。如果是4 x 4，5 x 5，堆起来的if else 会更多。有没有什么好的方式控制呢？"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"神奇的配置表思维要登场了！")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1. 定义配置")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const DATA_TYPE={\n    Chinese:'Chinese',\n    math:'math',\n    English:'English',\n}\n\nconst DIMENSION={\n   value:'value',\n   ranking:'ranking',\n   cycle:'cycle',\n}\nconst map={\n    [`${DATA_TYPE.Chinese}${DIMENSION.value}`]:()=>{\n        return 学生列表单选下拉框\n    },\n    [`${DATA_TYPE.Chinese}${DIMENSION.ranking}`]:()=>{\n        return 学生列表多选下拉框\n    },\n    [`${DATA_TYPE.Chinese}${DIMENSION.cycle}`]:()=>{\n        return 学生列表多选下拉框和历史月份周期单选下拉框\n    },\n    // ....\n}\n\n")),Object(a.b)("p",null,"看完你也许会好奇为啥键值对中的值用函数而不是直接放最后返回的组件。"),Object(a.b)("p",null,"写成函数的好处是你可以传递额外参数进来，比如把每个表单项的",Object(a.b)("strong",{parentName:"p"},"value，onChange,style"),"传进来。"),Object(a.b)("p",null,"这个看实际场景，如果不需要接收参数，直接返回组件也可以。"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2. 渲染")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"render (){\n    return (\n        <div>\n            {map[`${this.state.dataType}${this.state.dimension}`]()}\n        </div>\n    )\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3.后端处理")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"async function controller() {\n\n    // 获取前端传递参数 dataType,dimension\n    const map = {\n        [`${DATA_TYPE.Chinese}${DIMENSION.value}`]: handleChineseValue,\n        [`${DATA_TYPE.Chinese}${DIMENSION.ranking}`]: handleChineseRanking,\n        [`${DATA_TYPE.Chinese}${DIMENSION.cycle}`]: handleChineseCycle,\n        //...\n    }\n    return map[`${dataType}${dimension}`]()\n}\n\n//具体的业务处理函数\nasync function handleChineseValue() { }\nasync function handleChineseRanking() { }\nasync function handleChineseCycle() { }\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4. 返回格式")),Object(a.b)("p",null,"该格式指的是上述每个视图业务处理函数最终的返回格式。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"{\n    viewType:'', //前端根据该字段决定视图如何展示 ，可自定义 如 viewType:'value'|'ranking'|'line'\n    viewData:'' //前端展示数据\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5. 前端根据返回的视图类型和数据完成视图渲染")),Object(a.b)("p",null,"因为这东西更倾向思想层面，所以就不贴太多代码了。"),Object(a.b)("p",null,"关键部分已经给出，重在思维的理解。"),Object(a.b)("p",null,"如果觉得这个例子体现的不是很明显，可以再看看下面这个例子。"),Object(a.b)("h3",null,"数据的批量渲染"),Object(a.b)("p",null,"举一个比较传统的例子，根据筛选条件确定表格中数据。"),Object(a.b)("p",null,Object(a.b)("img",Object.assign({parentName:"p"},{src:"https://img-blog.csdnimg.cn/20210509183611485.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyODEzNDkx,size_16,color_FFFFFF,t_70",alt:null}))),Object(a.b)("p",null,"这部分我们还是只关心筛选条件的渲染，表格相关的就不贴了。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"\n  render() {\n    return (\n      <div style={{\n        width: 800\n      }}>\n\n        <Input style={{\n          width: 200,\n          margin: 20\n        }}\n          placeholder='name'\n        />\n        <Input style={{\n          width: 200,\n          margin: 20\n        }}\n          placeholder='age'\n        />\n        <Input style={{\n          width: 200,\n          margin: 20\n        }}\n          placeholder='address'\n        />\n        <Button type='primary'>查询</Button>\n      </div>\n\n    )\n\n\n  }\n")),Object(a.b)("p",null,"如果八九个呢？一直罗列下去会不会显得太冗长？"),Object(a.b)("p",null,"其实这些表单元素公共东西太多了，完全可以抽离成配置表的形式。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const list =[\n  {\n    type: Input,\n    placeholder: 'name',\n    style: {\n      width: 200,\n      margin: 20\n    },\n    key: 'name'\n  },\n  {\n    type: Input,\n    placeholder: 'age',\n    style: {\n      width: 200,\n      margin: 20\n    },\n    key: 'age'\n  },\n  {\n    type: Input,\n    placeholder: 'address',\n    style: {\n      width: 200,\n      margin: 20\n    },\n    key: 'address'\n  },\n]\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"渲染")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"  render() {\n    return (\n      <div style={{\n        width: 800\n      }}>\n        {\n          list.map(item => {\n            const { type: Component, key, ...rest } = item\n            return <Component    {...rest} key={key}\n              value={this.state[key]}\n              onChange={e => {\n                this.setState({\n                  [key]: e.target.value\n                })\n              }}\n            />\n          })\n        }\n        <Button type='primary'>查询</Button>\n      </div>\n\n    )\n\n\n  }\n")),Object(a.b)("p",null,"上边是公用onChange场景，如果要定制每一个表单项的onChange，可以将list改成函数，将每个onChange传递进来"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const list = ({\n  name,\n  age,\n  address,\n  setName,\n  setAge,\n  setAddresss\n}) => [\n    {\n      type: Input,\n      placeholder: 'name',\n      style: {\n        width: 200,\n        margin: 20\n      },\n      key: 'name',\n      value: name,\n      onChange: setName\n    },\n    {\n      type: Input,\n      placeholder: 'age',\n      style: {\n        width: 200,\n        margin: 20\n      },\n      key: 'age',\n      value: age,\n      onChange: setAge\n    },\n    {\n      type: Input,\n      placeholder: 'address',\n      style: {\n        width: 200,\n        margin: 20\n      },\n      key: 'address',\n      value: address,\n      onChange: setAddresss\n    },\n  ]\n\n  render() {\n\n    const props = {\n      name: this.state.name,\n      age: this.state.age,\n      address: this.state.address,\n      setName: (e) => {\n        this.setState({\n          name: e.target.value\n        })\n      },\n      setAge: (e) => {\n        this.setState({\n          age: e.target.value\n        })\n      },\n      setAddresss: (e) => {\n        this.setState({\n          address: e.target.value\n        })\n      },\n    }\n    return (\n      <div style={{\n        width: 800\n      }}>\n        {\n          list(props).map(item => {\n            const { type: Component, ...rest } = item\n            return <Component    {...rest} />\n          })\n        }\n        <Button type='primary'>查询</Button>\n      </div>\n\n    )\n\n\n  }\n\n")),Object(a.b)("p",null,"比起直接罗列，这种方式看起来会更清晰一些。"),Object(a.b)("p",null,"就这？就这？嗯，完了，希望这篇文章对你有所帮助。"),Object(a.b)("h2",null,"再会"),Object(a.b)("p",null,"情如风雪无常,"),Object(a.b)("p",null,"却是一动既殇。"),Object(a.b)("p",null,"感谢你这么好看还来阅读我的文章,"),Object(a.b)("p",null,"我是冷月心,下期再见。"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-config-table-index-mdx-46baf5c85e56e58ed38e.js.map