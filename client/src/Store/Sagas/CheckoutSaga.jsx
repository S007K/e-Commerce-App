import {takeEvery,put} from "redux-saga/effects"
import { createCheckoutAPI, deleteCheckoutAPI, getCheckoutAPI, getCheckoutUserAPI, updateCheckoutAPI } from "../Service"
import {ADD_CHECKOUT,ADD_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, GET_CHECKOUT_USER, GET_CHECKOUT_USER_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED} from "../Constants"

function* createCheckoutSaga(action){   //executer
    var response = yield createCheckoutAPI(action.payload)
    yield put({type:ADD_CHECKOUT_RED,data:response.data})
}
function* getCheckoutSaga(){   //executer
    var response = yield getCheckoutAPI()
    yield put({type:GET_CHECKOUT_RED,data:response.data})
}
function* getCheckoutUserSaga(){   //executer
    var response = yield getCheckoutUserAPI()
    yield put({type:GET_CHECKOUT_USER_RED ,data:response.data})
}
function* deleteCheckoutSaga(action){   //executer
    yield deleteCheckoutAPI(action.payload)
    yield put({type:DELETE_CHECKOUT_RED,data:action.payload})
}
function* updateCheckoutSaga(action){   //executer
    yield updateCheckoutAPI(action.payload)
    yield put({type:UPDATE_CHECKOUT_RED,data:action.payload})
}
export function* checkoutSaga(){    //watcher
    yield takeEvery(ADD_CHECKOUT,createCheckoutSaga)
    yield takeEvery(GET_CHECKOUT,getCheckoutSaga)
    yield takeEvery(GET_CHECKOUT_USER,getCheckoutUserSaga)
    yield takeEvery(DELETE_CHECKOUT,deleteCheckoutSaga)
    yield takeEvery(UPDATE_CHECKOUT,updateCheckoutSaga)
}