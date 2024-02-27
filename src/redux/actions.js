import {types} from "./types";

export function changeTitleAction(){
    return{
        type: types.CHANGE_TITLE
    }
}

export function changeInputAction(value){
    return {
        type: types.INPUT_VALUE,
        payload: value
    }
}

export  function addUserAction(name){
    return{
        type: types.ADD_USER,
        payload: name
}
}

export function clearUserAction(){
    return{
        type: types.CLEAR_USER
    }
}

export function deleteAllAction(name){
    return{
        type: types.DELETE_ALL
    }
}

export function addData(data)
{
    return {
        type: types.ADD_DATA,
        payload: data
    }
}
