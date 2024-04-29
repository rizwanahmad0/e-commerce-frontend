
export const addInCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'addInCart',
            payload: item
        })
    }
}


export const removeFromCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'removeFromCart',
            payload: item
        })
    }
}