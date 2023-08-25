import { ADD_CHECKOUT_RED, DELETE_CHECKOUT_RED, GET_CHECKOUT_RED, GET_CHECKOUT_USER_RED, UPDATE_CHECKOUT_RED } from "../Constants"
export function CheckoutReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_CHECKOUT_RED:
            newState = state
            newState.push(action.data)
            return newState
        case GET_CHECKOUT_RED:
            return action.data
        case GET_CHECKOUT_USER_RED:
            return action.data
        case DELETE_CHECKOUT_RED:
            newState = state.filter(item => item._id !== action.data._id)
            return newState
        case UPDATE_CHECKOUT_RED:
            newState = state
            var index = newState.findIndex((item) => item._id === action.data._id)
            newState[index] = action.data
            return newState
        default:
            return state
    }
}