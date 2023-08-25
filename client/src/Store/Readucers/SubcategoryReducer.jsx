import { ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY_RED } from "../Constants"
export function SubcategoryReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_SUBCATEGORY_RED:
            newState = state
            newState.push(action.data)
            return newState
        case GET_SUBCATEGORY_RED:
            return action.data
        case DELETE_SUBCATEGORY_RED:
            newState = state.filter(item => item._id !== action.data._id)
            return newState
        case UPDATE_SUBCATEGORY_RED:
            newState = state
            var index = newState.findIndex((item) => item._id === action.data._id)
            newState[index] = action.data
            return newState
        default:
            return state
    }
}