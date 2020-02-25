---
title: 'redux-thunk的思考'
date: '2019-09-16'
spoiler: 需要再梳理下
---

先贴源码，理解一下thunk的走向

```
// redux-thunk core code

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```
```
// redux src/compose.ts core code

export default function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}
```
```
// redux src/applyMiddleware.ts core code

export default function applyMiddleware(
  ...middlewares: Middleware[]
): StoreEnhancer<any> {
  return (createStore: StoreCreator) => <S, A extends AnyAction>(
    reducer: Reducer<S, A>,
    ...args: any[]
  ) => {
    const store = createStore(reducer, ...args)
    let dispatch: Dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }

    const middlewareAPI: MiddlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose<typeof dispatch>(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}

```
结合redux的源码可以看出dispatch会先经过thunk，thunk判别action是函数，则先同步调用函数，并且返回函数值。action可以作为一个函数被接收，那么就可以是generator函数，async函数等，尽可以在这个函数中做异步操作。

其中疑惑的是为什么形如:
```
// ...省略一些引入代码，看下关键代码

function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());
    return fetch(`http://www.reddit.com/r/reactjs.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  };
}

dispatch(fetchPosts()).then((res) => { console.log(res) })

```
`dispatch`还可以接收promise继续`.then`，因为我起初认为`action`最终是要生成一个符合期望的对象传给`store.dispatch`，但后来仔细分析之后发现，thunk的`dispatch`接收一个`function`，最终是以这个`function`的返回值作为`dispatch`结束后的值，所以上例才能接收一个`promise`。

这样下来，算是把thunk的来龙去脉理清了。