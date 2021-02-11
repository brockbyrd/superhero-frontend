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

        case "UPDATE_CHARACTERS":
            return{
                ...state,
                characters: [...state.characters],
                loading: true
            }

        case "NEW_CHARACTER":
             return {
                 characters: state.characters.concat(action.character),
                 loading: false
             }

        default:
            return state;
        }
}

export default characterReducer;