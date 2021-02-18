(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{SfDe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return l}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),r=n("Hv6d");var c={},b={_frontmatter:c},s=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"前言"),Object(a.b)("p",null,"redux是一个十分常用js的状态管理库,但并不意味着一定为react服务,真正把redux和react绑在一起的是react-redux。\nredux里边有很多概念,比如store,action,reducer,dispatch。\n这些概念也和很多模板语法相绑定,比如更新状态需要派发一个action,而每个action必须要有一个type属性。\nreducer中根据action的type类型进行不同的业务逻辑处理,最终返回新状态完成状态变更。"),Object(a.b)("p",null,"猛然一看,整个更新链路还是很长的。这也是redux被吐槽的点吧,模板语法太多,显得冗余。\n但不管怎么说,redux还是很优秀的。站在面试角度,涉及的redux核心点其实还好,主要是createStore,compose。\n当然也有一些其他的,面试不太常考但确实是加分项的bindActionCreators,\ncombineReducers,applyMiddleware。"),Object(a.b)("p",null,"本篇为源码系列核心实现第三篇,对应下图redux部分。"),Object(a.b)("p",null,Object(a.b)("img",Object.assign({parentName:"p"},{src:"https://lengyuexin.github.io/gatsby/static/src-c54cf51e73a8fdc229c79ea7b981b607.png",alt:"src"}))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"name"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"desc")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"createStore"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"创建store")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"compose"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"组合中间件(同为洋葱模型)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"bindActionCreators"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"为actionCreator绑定dispatch")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"combineReducers"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"合并多个reducer")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"applyMiddleware"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"应用中间件")))),Object(a.b)("h2",null,"createStore到底干了点什么？"),Object(a.b)("h3",null,"基本使用"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import {createStore} from 'redux'\nconst store=createStore(reducer,initState)\n")),Object(a.b)("p",null,"如果你实际用过redux,那对上面的代码一定不陌生。"),Object(a.b)("p",null,"createStore接收reducer,initState为参数,返回一个创建后的store。\n其实还有第三个参数enhancer,不过在本文不做重点。"),Object(a.b)("p",null,"大胆的猜一下,createStore的背后,偷偷的干了些什么呢？\n又或者说,你觉得,它应该在这个阶段做什么？"),Object(a.b)("h3",null,"内部实现"),Object(a.b)("p",null,"createStore是一切状态来源,从这点考虑,它内部必然涉及状态的初始化。\n此外,说到状态,那自然要有状态获取和状态更新。\n而createStore内部,其实也就干了这几件事。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const createStore = (reducer, preloadState) => {\n    //状态初始化\n    let currentState = preloadState\n    let currentListeners = [];\n    //获取状态\n    function getState() {\n        return currentState;\n    }\n    //更新状态\n    const dispatch = action => {\n        currentState = reducer(currentState, action);\n        currentListeners.forEach((l) => l());\n        return action;\n    };\n    // initState 初始状态树构建\n    //其实这里type是什么没太大意义,主要是为了初始化\n    dispatch({ type: 'INIT' })\n    //订阅\n    const subscribe = listener => {\n        currentListeners.push(listener);\n        return function () {\n            let index = currentListeners.indexOf(listener);\n            currentListeners.splice(index, 1);\n        };\n    };\n    const store = {\n        getState,\n        dispatch,\n        subscribe,\n    };\n    return store;\n};\n")),Object(a.b)("p",null,"关键点都有注释,应该好理解。至于subscribe,暂且略过,下一篇结合react-redux就好理解了。"),Object(a.b)("p",null,"面试会问什么呢？哈哈,结合我的经验,大概会问你redux中用了什么设计模式?\nsubscribe很明显的,发布订阅模式。"),Object(a.b)("p",null,"反过来想,如果问你知道什么设计模式,你也可以说发布订阅,并举例redux中createStore的实际应用。\n此外,如果你能手写createStore并指明发布订阅具体是哪里体现的,那绝对是加分项。"),Object(a.b)("h2",null,"好用的bindActionCreators"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"bindActionCreators解决了什么问题？")),Object(a.b)("p",null,"我关注源码除了解决实际业务痛点和面试外,还有一点就是可以找到那些不太为人所知但确实很有用的小东西。\n就比如bindActionCreators。它将actionCreator与dispatch完成绑定,简化了redux的更新逻辑代码。"),Object(a.b)("p",null,"下一步探索前,先解释2个小概念,以防理解混乱。"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"name"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"desc"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"example")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"action"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"带有type属性的js简单对象"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"const action={ type:'xxx'}")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"actionCreator"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"一个返回action的函数"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"const ac=()=>({ type:'xxx'})")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"之前的写法")),Object(a.b)("p",null,"ok,在引出bindActionCreator前,我们先看一下以前更新逻辑是如何的。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const add=(msg)=>({type:'add',msg})\n<button onClick={()=>{store.dispatch(add('add'))}}>add</button>\n")),Object(a.b)("p",null,"代码看似很简单,但更新部分很冗余,每个更新都要加store.dispatch。"),Object(a.b)("p",null,"这东西能不能一次绑定,随处使用？bindActionCreator就是干这事用的。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"function bindActionCreator(actionCreator, dispatch) {\n  return function(...args) {\n    return dispatch(actionCreator(...args))\n  }\n}\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"现在的写法")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"//有参场景\nconst add=bindActionCreator(add,store.dispatch)\n<button onClick={()=>add('add')}>add</button>\n\n//无参场景\nconst add=bindActionCreator(add,store.dispatch)\n<button onClick={add}>add</button>\n\n")),Object(a.b)("p",null,"bindActionCreator本质就是将store.dispatch做了一个收敛,内部绑定actionCreator。\n这样一来,不论是有参数还是无参数情况,都看着简洁了些。如果是多绑定,效果更明显。"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"bindActionCreators实现与应用")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'function bindActionCreators(actionCreators, dispatch) {\n    if (typeof actionCreators === "function") {\n        return bindActionCreator(actionCreators, dispatch);\n    }\n\n    const boundActionCreators = {};\n    for (const key in actionCreators) {\n        const actionCreator = actionCreators[key];\n        if (typeof actionCreator === "function") {\n            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n        }\n    }\n    return boundActionCreators;\n}\n\n// 绑定多个ActionCreator\nconst increment = () => ({ type: INCREMENT})\nconst decrement = () =>({ type: DECREMENT })\nconst actionCreators = {\n  increment,\n  decrement,\n};\nconst bindActions = bindActionCreators(actionCreators, store.dispatch);\n<button onClick={bindActions.increment}>+</button>\n<button onClick={bindActions.decrement}>-</button>\n\n')),Object(a.b)("p",null,"如果你注意看bindActionCreators的实现,它其实是和传入的actionCreator同名绑定。"),Object(a.b)("h2",null,"combineReducers"),Object(a.b)("p",null,"不论哪种形式的更新,最后都会走到reducer去处理。\n如果一个项目只有一个reducer,随着项目复杂度的提升,都写在一起会很难维护。"),Object(a.b)("p",null,"更好的方法是先拆后合。根据业务不同,可细分多个reducer,单独维护自己的小状态,最后合并在一起。\ncombineReducers就是用来干这件事的,它接收一个包含reducer的对象,并返回一个合并后的reducer。"),Object(a.b)("p",null,"为了更便于理解,文末我会放一个实战项目,请注意查收。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\n//获取各自对应的state和reducer,完成更新后返回新的state\nfunction combineReducers(reducers) {\n  return function (state, action) {\n    const nextState = {};\n    for (const key in reducers) {\n      if (reducers.hasOwnProperty(key)) {\n        let reducer = reducers[key];\n        let preStateForKey = state[key]; \n        let nextStateForKey = reducer(preStateForKey, action);\n        nextState[key] = nextStateForKey;\n      }\n    }\n    return nextState;\n  };\n}\n\n\n\n")),Object(a.b)("h2",null,"中间件"),Object(a.b)("p",null,"截止到目前,redux核心已经讲了一半,接下来是中间件的组合与应用。\n它并不神奇,但是有些难理解,建议多写代码实践下。\n对应源码中的applyMiddleware和compose。"),Object(a.b)("h3",null,"中间件是什么？"),Object(a.b)("p",null,"顾名思义,中间件就是中间环节的处理过程,可以做一些额外的事。\n那什么算是中间环节呢？对redux来说,派发action到状态更新完毕整个过程中,\n任意节点都算是中间环节。也可以看做是工厂流水线,在中间环节不断加工。"),Object(a.b)("p",null,"先来个最好理解的logger中间件,在每次状态变更之后打印新状态。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'\nconst originDispatch = store.dispatch;\n\nstore.dispatch = (action: any): any => {\n  console.log("before:", store.getState());\n  originDispatch(action);\n  console.log("after:", store.getState());\n  return action;\n};\n\n\n')),Object(a.b)("p",null,"就这？就算是一个中间件了？是的,简化版可以这么理解。"),Object(a.b)("p",null,"如果想更进阶一层,可以这样写。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'\nconst logger = function (api) {\n  return function (next) {\n    return function (action) {\n      console.log("before:", api.getState());\n      let res = next(action);\n      console.log("after:", api.getState());\n      return res;\n    };\n  };\n};\n\n\n')),Object(a.b)("p",null,"为什么要写成这样？api,next又是什么？这些疑问会在applyMiddleware中给出答案,莫急。"),Object(a.b)("h3",null,"中间件的原理是什么？"),Object(a.b)("p",null,"一句话,使用自定义逻辑的dispatch替换store中的dispatch,且在自定义的dispatch内部调用store.dispatch。\n有点绕,也有点像react中的自定义hooks,但拆开来看也许好理解些。"),Object(a.b)("p",null,"重写dispatch是为了自定义我们想要的逻辑,比如状态打印。\n而redux对外只提供了一种更新方式,那就是dispatch。\n所以我们需要保留原始的dispatch用于触发更新。"),Object(a.b)("p",null,"为了便于理解,再举一个派发异步action的例子。\n默认redux是不支持的,需要借助thunk,saga等异步中间件处理。\n这里来个简化版的异步处理:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const originDispatch = store.dispatch;\nstore.dispatch = action=> {\n  // 也可以根据action.type决定是否需要延迟处理\n  setTimeout(() => {\n    // 外部先延迟处理\n    // 这里调用改写前的store.dispatch \n    // 本质还是同步\n    originDispatch(action);\n  }, 1000);\n\n  return action;\n};\n\n")),Object(a.b)("h2",null,"applyMiddleware"),Object(a.b)("p",null,"applyMiddleware用于应用中间件,其流程相对繁杂。\n首先,applyMiddleware接收中间件为参数,函数调用后返回一个storeEnhancer。\n其次,storeEnhancer接收createStore为参数,返回storeEnhancerStoreCreator。\n最后,storeEnhancerStoreCreator 接收reducer和initState, 返回store。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const storeEnhancer = applyMiddleware(logger);\nconst storeEnhancerStoreCreator = storeEnhancer(createStore);\nconst _store = storeEnhancerStoreCreator(rootReducer, {\n  counter1: { number: 0 },\n  counter2: { number: 0 },\n});\n\n\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"applyMiddleware实现")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\n function applyMiddleware(...middlewares) {\n  return (createStore) => {\n    return (...args) => {\n      let store = createStore(...args);\n      let dispatch = () => {};\n\n      const middlewareAPI = {\n        getState: store.getState,\n        dispatch: (...args) => dispatch(...args),\n      };\n\n      //注意这里传递的middlewareAPI\n      //其实就是中间件执行时候接收的api参数\n      //直接解构可以得到getState函数和dispatch函数\n      const chain = middlewares.map((middleware) => middleware(middlewareAPI));\n      dispatch = compose(...chain)(store.dispatch);\n      //此时的dispatch已经是应用完中间件后的dispatch\n      return {\n        ...store,\n        dispatch,\n      };\n    };\n  };\n}\n\n\n\n\n")),Object(a.b)("p",null,"上边代码需要额外关注的是下边这两行，本质都是在进行绑定，或者说，柯里化。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// chain = [(next)=>(action)=>{…}, (next)=>(action)=>{…}, (next)=>(action)=>{…}]\nconst chain = middlewares.map((middleware) => middleware(middlewareAPI));\ndispatch = compose(...chain)(store.dispatch);\n\n")),Object(a.b)("p",null,"最原始的中间件其实有三层api=>next=>action=>{},一直到最后一层才真正派发action。\n在map执行完，已经拆出了一层。chain实际内容已在上边注释中标出，api是什么在applyMiddleware中标出。"),Object(a.b)("p",null,"那问题来了，next是什么？"),Object(a.b)("p",null,"在解释前，需要先看下compose函数。"),Object(a.b)("h2",null,"compose"),Object(a.b)("p",null,"看起来compose有些难理解，一句话，从右至左依次将右边的返回值作为左边的参数传入。\n不得不佩服redux作者，这波思路实在是有点秀。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\nfunction compose(...funcs) {\n  if (funcs.length === 0) {\n    return (arg) => arg;\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce((a, b) => (...args) => a(b(...args)));\n}\n\n\n\n")),Object(a.b)("p",null,"组合了什么？看起来似乎还是不太好理解。来个小例子，说明组合的效果。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\nfunction m1(a) {\n    return '冷' + a\n}\n\nfunction m2(b) {\n    return '月' + b\n}\n\nfunction m3(c) {\n    return '心' + c\n}\n\n//从右到左依次执行\n//返回的结果用作下一个函数的参数\nm1(m2(m3('1024')))//冷月心1024\n\n")),Object(a.b)("p",null,"这个时候再看compose(...chain)(store.dispatch)，是否有些感觉了？"),Object(a.b)("p",null,"实际上如果只有一个中间件，那么next实际就是指的传入的参数，即store.dispatch。\n如果是多个中间件，next指向的就是下一个中间件。"),Object(a.b)("p",null,"回首再看logger中间件。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'\nconst logger = function (api) {\n  //next代表的是调用下一个中间件或者原来的store.dispatch\n  return function (next) {\n    //这里返回的函数就是compose最终组合后的结果，即改写后的dispatch\n    //至于为什么要改写，最开始中间件原理有提到\n    //自定义逻辑就必须改写，保证能触发更新就必须调用旧的dispatch\n    return function (action) {\n      console.log("before:", api.getState());\n      let res = next(action);\n      console.log("after:", api.getState());\n      return res;\n    };\n  };\n};\n\n\n')),Object(a.b)("h2",null,"redux-thunk"),Object(a.b)("p",null,"顺路看一眼thunk的实现，重在思想，代码其实不多。"),Object(a.b)("p",null,"在Redux中默认action必须是一个简单对象，其中不包括函数和数组，且默认只能处理同步逻辑。\n因为异步的刚派发过去还没拿到返回结果reducer已经完事了，显然不符合预期。\n当我们使用redux-thunk后，可以dispatch一个函数，然后在其内部写异步派发逻辑。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\nfunction createThunkMiddleware(extraArgument) {\n    return ({ dispatch, getState }) => (next) => (action) => {\n        //如果是函数 执行后返回\n        if (typeof action === 'function') {\n            return action(dispatch, getState, extraArgument);\n        }\n        //next为之前传入的store.dispatch，即改写前的dispatch\n        return next(action);\n    };\n}\nconst thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\n\n\n\n")),Object(a.b)("h2",null,"实战项目"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/lengyuexin/jianshu"}),"https://github.com/lengyuexin/jianshu"))),Object(a.b)("h2",null,"源码压缩包"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/lengyuexin/code"}),"https://github.com/lengyuexin/code"))),Object(a.b)("h2",null,"再会"),Object(a.b)("p",null,"情如风雪无常,"),Object(a.b)("p",null,"却是一动既殇。"),Object(a.b)("p",null,"感谢你这么好看还来阅读我的文章,"),Object(a.b)("p",null,"我是冷月心,下期再见。"))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-redux-index-mdx-85e3e8e483fd324b257a.js.map