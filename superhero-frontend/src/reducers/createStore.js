function createStore(reducer){
    let state;

    function dispatch(action) {
      state = reducer(state, action);
      render();
    }

    function getState(){
      return state;
    };

    return {
      dispatch,
      getState
    };
  }

  function characterReducer(state = [], action) {
      switch(action.type){
        case 'GOOD':
            return [...state, action.characters];
        case 'EVIL':
            return [...state, action.characters];
        default:
            return state;
      }
  }

  let store = createStore(characterReducer);
  store.dispatch({ type: '@@INIT' })