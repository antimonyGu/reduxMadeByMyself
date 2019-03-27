function createStore(reducer, initState) {
    
    let state = initState
    let listeners  = []
    function getState() {
      return state
    }
    
    function dispatch(action) {
      state = reducer(state, action)
  
      listeners.forEach(listener => listener())
    }
    
    function subscribe(listener) {
      listeners.push(listener)
    }
    
    return {
      getState,
      dispatch,
      subscribe
    }
  }
  
  function combineReducers(reducerObj) {
  
    return function (state = {}, action) {
      let newState = {}
      for(let key in reducerObj) {
        let reducer = reducerObj[key]
        newState[key] = reducer(state[key], action)
      }
      return newState
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  let initCounter = {
    number: 100
  }
  
  let counterReducer = (state = initCounter, action) => {
    switch (action.type) {
      case 'PLUS':
        return { number: state.number + 1 }
      case 'MINUS':
        return { number: state.number - 1 }
      default:
        return state
    }
  }
  
  
  let initPerson = {
    name: 'hunger',
    age: 4
  }
  let personReducer = (state = initPerson, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.name }
      case 'SET_AGE':
        return { ...state, age: action.age }
      default:
        return state
    }
  }
  
  const reducer = combineReducers({ counter: counterReducer, person: personReducer })
  
  let store = createStore(reducer)
  
  
  store.subscribe(() => {
    let state = store.getState()
    console.log(state)
  })
  
  store.dispatch({type: 'PLUS'})
  store.dispatch({type: 'MINUS'})
  store.dispatch({type: 'SET_NAME', name: 'jirengu'})