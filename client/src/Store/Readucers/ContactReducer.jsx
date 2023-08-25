import { ADD_CONTACT_RED, DELETE_CONTACT_RED, GET_CONTACT_RED, UPDATE_CONTACT_RED } from "../Constants"
export function ContactReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_CONTACT_RED:
            newState = state
            newState.push(action.data)
            return newState
        case GET_CONTACT_RED:
            return action.data
        case DELETE_CONTACT_RED:
            newState = state.filter(item => item._id !== action.data._id)
            return newState
        case UPDATE_CONTACT_RED:
            newState = state
            var index = newState.findIndex((item) => item._id === action.data._id)
            newState[index] = action.data
            return newState
        default:
            return state
    }
}