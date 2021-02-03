export const fetchCharacters = () => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_CHARACTERS'})
        fetch('http://localhost:5000/characters')
            .then(response => { return response.json() })
            .then(data => { dispatch({ type: "ADD_CHARACTERS", characters: data })})
    }
}