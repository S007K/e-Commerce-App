import {takeEvery,put} from "redux-saga/effects"
import { createMaincategoryAPI, deleteMaincategoryAPI, getMaincategoryAPI, updateMaincategoryAPI } from "../Service"
import {ADD_MAINCATEGORY,ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED} from "../Constants"

function* createMaincategorySaga(action){   //executer
    var response = yield createMaincategoryAPI(action.payload)
    yield put({type:ADD_MAINCATEGORY_RED,data:response.data})
}
function* getMaincategorySaga(){   //executer
    var response = yield getMaincategoryAPI()
    yield put({type:GET_MAINCATEGORY_RED,data:response.data})
}
function* deleteMaincategorySaga(action){   //executer
    yield deleteMaincategoryAPI(action.payload)
    yield put({type:DELETE_MAINCATEGORY_RED,data:action.payload})
}
function* updateMaincategorySaga(action){   //executer
    yield updateMaincategoryAPI(action.payload)
    yield put({type:UPDATE_MAINCATEGORY_RED,data:action.payload})
}
export function* maincategorySaga(){    //watcher
    yield takeEvery(ADD_MAINCATEGORY,createMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY,getMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteMaincategorySaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateMaincategorySaga)
}