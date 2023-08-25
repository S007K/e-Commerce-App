import {takeEvery,put} from "redux-saga/effects"
import { createWishlistAPI, deleteWishlistAPI, getWishlistAPI, updateWishlistAPI } from "../Service"
import {ADD_WISHLIST,ADD_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED, UPDATE_WISHLIST, UPDATE_WISHLIST_RED} from "../Constants"

function* createWishlistSaga(action){   //executer
    var response = yield createWishlistAPI(action.payload)
    yield put({type:ADD_WISHLIST_RED,data:response.data})
}
function* getWishlistSaga(){   //executer
    var response = yield getWishlistAPI()
    yield put({type:GET_WISHLIST_RED,data:response.data})
}
function* deleteWishlistSaga(action){   //executer
    yield deleteWishlistAPI(action.payload)
    yield put({type:DELETE_WISHLIST_RED,data:action.payload})
}

export function* wishlistSaga(){    //watcher
    yield takeEvery(ADD_WISHLIST,createWishlistSaga)
    yield takeEvery(GET_WISHLIST,getWishlistSaga)
    yield takeEvery(DELETE_WISHLIST,deleteWishlistSaga)
    
}