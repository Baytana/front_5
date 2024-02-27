import {types} from "./types";

const initialState = {
    value: '',
    users: [],
    data: []
}

export default function usersReducer(state= initialState, action){
    if (action.type === types.INPUT_VALUE){
        return {...state,value: action.payload}
    }else if (action.type === types.ADD_USER){
        return {...state,users: [...state.users,action.payload],value: ''}
    }else if (action.type === types.CLEAR_USER){
        return {...state, value: ''}
    }else if (action.type === types.DELETE_ALL){
        return {...state,value: '', users: []}
    }else if (action.type === types.ADD_DATA){
        return {...state,data: [...state.data, action.payload]}
    }

    return state
}