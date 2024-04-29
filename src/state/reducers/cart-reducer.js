const cartReducers = ((state = [], action) => {

    if (action.type === 'addInCart') {
        const item = state.find((item) => item.id === action.payload.id)
        if (!item) {
            window.alert("Product Added Successfully!");
            return [...state, action.payload];
        }
        window.alert("Product already exist!");
        return state
    }

    if (action.type === 'removeFromCart') {
        window.alert("Product removed Successfully!");
        return state.filter(item => item.id !== action.payload.id);
    }
    else {
        return state
    }

})

export default cartReducers