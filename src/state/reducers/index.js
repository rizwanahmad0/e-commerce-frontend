import { combineReducers } from 'redux'

import cartReducers from './cart-reducer'

const reducer = combineReducers({
    cart: cartReducers
})

export default reducer