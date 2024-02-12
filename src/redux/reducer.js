const initialState= {
    title: 'old title',
    aboutTitle: '',
    contactsTitle:'',
    counterValue:0
}

export default function reducer (state= initialState, action){
    if (action.type === 'CHANGE_TITLE'){
        return {...state, title: 'neeew title'}
    }else if(action.type === 'CHANGE_ABOUT_TITLE') {
        return {...state, aboutTitle: 'hello monkey'}
    }else if (action.type === 'WITH_PARAMS'){
        return {...state,contactsTitle: action.payload}
    }else if (action.type === 'FROM_INPUT'){
        return {...state,contactsTitle: action.payload}
    }else if (action.type === 'INCREMENT'){
        return {...state,counterValue: action.payload}
    }else if (action.type === 'DECREMENT'){
        if (state.counterValue > 0){
            return {...state,counterValue: action.payload}
        }else{
            return state
        }
    }else if (action.type === 'RESET'){
        return {...state,counterValue: action.payload}
    }else if (action.type === 'PLUS_TEN'){
        return {...state,counterValue: action.payload}
    }
    return state
}