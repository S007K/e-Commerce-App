import { ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constants"
export function MaincategoryReducer(state = [], action) {
    var newState
    switch (action.type) {
        case ADD_MAINCATEGORY_RED:
                newState = state
            newState.push(action.data)
            return newState
        case GET_MAINCATEGORY_RED:
            return action.data
        case DELETE_MAINCATEGORY_RED:
            var newState = state.filter(item=>item._id!==action.data._id)
            return newState
        case UPDATE_MAINCATEGORY_RED:
            newState = state
            var index = newState.findIndex((item)=>item._id===(action.data._id))
            newState[index].name = action.data.name
            return newState
        default:
            return state
    }
}