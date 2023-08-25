import { ADD_BRAND_RED, DELETE_BRAND_RED, GET_BRAND_RED, UPDATE_BRAND_RED } from "../Constants"
export function BrandReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_BRAND_RED:
            newState = state
            newState.push(action.data)
            return newState
        case GET_BRAND_RED:
            return action.data
        case DELETE_BRAND_RED:
            newState = state.filter(item => item._id !== action.data._id)
            return newState
        case UPDATE_BRAND_RED:
            newState = state
            var index = newState.findIndex((item) => item._id === action.data._id)
            newState[index] = action.data
            return newState
        default:
            return state
    }
}