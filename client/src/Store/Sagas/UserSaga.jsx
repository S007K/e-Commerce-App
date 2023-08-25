import {takeEvery,put} from "redux-saga/effects"
import { createUserAPI, deleteUserAPI, getUserAPI, updateUserAPI } from "../Service"
import {ADD_USER,ADD_USER_RED, DELETE_USER, DELETE_USER_RED, GET_USER, GET_USER_RED, UPDATE_USER, UPDATE_USER_RED} from "../Constants"

function* createUserSaga(action){   //executer
    var response = yield createUserAPI(action.payload)
    yield put({type:ADD_USER_RED,data:response.data})
}
function* getUserSaga(){   //executer
    var response = yield getUserAPI()
    yield put({type:GET_USER_RED,data:response.data})
}
function* deleteUserSaga(action){   //executer
    yield deleteUserAPI(action.payload)
    yield put({type:DELETE_USER_RED,data:action.payload})
}
function* updateUserSaga(action){   //executer
    yield updateUserAPI(action.payload)
    yield put({type:UPDATE_USER_RED,data:action.payload})
}
export function* userSaga(){    //watcher
    yield takeEvery(ADD_USER,createUserSaga)
    yield takeEvery(GET_USER,getUserSaga)
    yield takeEvery(DELETE_USER,deleteUserSaga)
    yield takeEvery(UPDATE_USER,updateUserSaga)
}