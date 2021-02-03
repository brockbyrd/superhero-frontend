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
            chars = state.filter((char) => char.alignment === 'good')
            return [...state, action.characters];

        case 'EVIL':
            chars = state.filter((char) => char.alignment === 'bad')
            return [...state, action.characters];

        default:
            return state;
      }
  }

  export default characterReducer;

  let store = createStore(characterReducer);
  store.dispatch({ type: '@@INIT' })