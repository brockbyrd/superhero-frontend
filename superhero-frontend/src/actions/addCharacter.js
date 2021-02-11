const addCharacter = (character) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_CHARACTERS' })
        fetch('http://localhost:5000/characters', {
            method: 'POST',
            body: JSON.stringify(character),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(character => {
            return dispatch({ type:'NEW_CHARACTER', character: character })
        })
    }
}
export default addCharacter;