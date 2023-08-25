import { ADD_PRODUCT_RED, DELETE_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../Constants"
export function ProductReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_PRODUCT_RED:
            newState = state
            newState.push(action.data)
            return newState
        case GET_PRODUCT_RED:
            return action.data
        case DELETE_PRODUCT_RED:
            newState = state.filter(item => item._id !== action.data._id)
            return newState
        case UPDATE_PRODUCT_RED:
            newState = state
            var index = newState.findIndex((item) => item._id === action.data._id)
            newState[index] = action.data
            return newState
        default:
            return state
    }
}