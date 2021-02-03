const characterReducer = (state = { characters: [], loading: false }, action) => {
    switch(action.type){

        case "LOADING_CHARACTERS":
            return {
                ...state,
                characters: [...state.characters],
                loading: true
            }

        case "ADD_CHARACTERS":
            return {
                ...state,
                characters: action.characters,
                loading: false
            }



        default:
            return state;
        }
}

export default characterReducer;