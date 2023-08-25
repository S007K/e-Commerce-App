import { ADD_CART_RED, DELETE_CART_RED, GET_CART_RED, UPDATE_CART_RED } from "../Constants"
export function CartReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_CART_RED:
            newState = state
            newState.push(action.data)
            return newState
        case GET_CART_RED:
            return action.data
        case DELETE_CART_RED:
            newState = state.filter(item => item._id !== action.data._id)
            return newState
        case UPDATE_CART_RED:
            newState = state
            var index = newState.findIndex((item) => item._id === action.data._id)
            newState[index] = action.data
            return newState
        default:
            return state
    }
}