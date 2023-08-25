import { ADD_NEWSLATTER_RED, DELETE_NEWSLATTER_RED, GET_NEWSLATTER_RED } from "../Constants"
export function NewslatterReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_NEWSLATTER_RED:
            newState = state
            newState.push(action.data)
            return newState
        case GET_NEWSLATTER_RED:
            return action.data
        case DELETE_NEWSLATTER_RED:
            newState = state.filter(item => item._id !== action.data._id)
            return newState
        default:
            return state
    }
}