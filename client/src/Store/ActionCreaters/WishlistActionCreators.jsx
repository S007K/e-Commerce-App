import { ADD_WISHLIST, DELETE_WISHLIST, GET_WISHLIST, UPDATE_WISHLIST } from "../Constants";

export function addWishlist(data){
    return{
        type:ADD_WISHLIST,
        payload:data
    }
}
export function getWishlist(){
    return{
        type:GET_WISHLIST
    }
}
export function updateWishlist(data){
    return{
        type:UPDATE_WISHLIST,
        payload:data
    }
}
export function deleteWishlist(data){
    return{
        type:DELETE_WISHLIST,
        payload:data
    }
}