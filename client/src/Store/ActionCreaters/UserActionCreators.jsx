import { ADD_USER, DELETE_USER, GET_USER, UPDATE_USER } from "../Constants";

export function addUser(data){
    return{
        type:ADD_USER,
        payload:data
    }
}
export function getUser(){
    return{
        type:GET_USER
    }
}
export function updateUser(data){
    return{
        type:UPDATE_USER,
        payload:data
    }
}
export function deleteUser(data){
    return{
        type:DELETE_USER,
        payload:data
    }
}