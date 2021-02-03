import characterReducer from './characterReducer'

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

  let store = createStore(characterReducer);
  store.dispatch({ type: '@@INIT' })