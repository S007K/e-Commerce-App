import {takeEvery,put} from "redux-saga/effects"
import { createSubcategoryAPI, deleteSubcategoryAPI, getSubcategoryAPI, updateSubcategoryAPI } from "../Service"
import {ADD_SUBCATEGORY,ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED} from "../Constants"

function* createSubcategorySaga(action){   //executer
    var response = yield createSubcategoryAPI(action.payload)
    yield put({type:ADD_SUBCATEGORY_RED,data:response.data})
}
function* getSubcategorySaga(){   //executer
    var response = yield getSubcategoryAPI()
    yield put({type:GET_SUBCATEGORY_RED,data:response.data})
}
function* deleteSubcategorySaga(action){   //executer
    yield deleteSubcategoryAPI(action.payload)
    yield put({type:DELETE_SUBCATEGORY_RED,data:action.payload})
}
function* updateSubcategorySaga(action){   //executer
    yield updateSubcategoryAPI(action.payload)
    yield put({type:UPDATE_SUBCATEGORY_RED,data:action.payload})
}
export function* subcategorySaga(){    //watcher isme s small rhega
    yield takeEvery(ADD_SUBCATEGORY,createSubcategorySaga)
    yield takeEvery(GET_SUBCATEGORY,getSubcategorySaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSubcategorySaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSubcategorySaga)
}