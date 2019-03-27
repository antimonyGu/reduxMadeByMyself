# reduxMadeByMyself
### redux流程
首先，用户发出 Action。

```
store.dispatch(action);
```
然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。

```
let nextState = todoApp(previousState, action);
```
State 一旦有变化，Store 就会调用监听函数。

```
// 设置监听函数
store.subscribe(listener);
```
listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。

```
function listerner() {
  let newState = store.getState();
  component.setState(newState);   
}
```

---
### 基础原理
redux的基础是发布订阅模式。
设计Redux的三大原则
1 唯一数据源
2 保持只读状态
3 数据改变只能通过纯函数来执行

**1唯一数据源**

整个应用的state都被存储到一个状态树里面，并且这个状态树，只存在于唯一的store中

**2保持只读状态**

state是只读的，唯一改变state的方法就是触发action，action是一个用于描述以发生时间的普通对象

**3数据改变只能通过纯函数来执行**

使用纯函数来执行修改，为了描述action如何改变state的，你需要编写reducers
或许你读到这已经不知所云了，没事这只是让你了解一些redux到底是干嘛的，后面或详细的讲解各个部分的作用，并且会讲解redux实现原理
