import { ADD_WISHLIST_RED, DELETE_WISHLIST_RED, GET_WISHLIST_RED } from "../Constants"
export function WishlistReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_WISHLIST_RED:
            newState = state
            newState.push(action.data)
            return newState
        case GET_WISHLIST_RED:
            return action.data
        case DELETE_WISHLIST_RED:
            newState = state.filter(item => item._id !== action.data._id)
            return newState
        default:
            return state
    }
}