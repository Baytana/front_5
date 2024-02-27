import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeTitleAction} from "../../redux/actions";


function MainPage(){
    const dispatch= useDispatch()
    const title = useSelector(state => state.titleReducer.title)
    const changeTitle=()=>{
        dispatch(changeTitleAction())
    }

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
        </div>
    )
}
export default MainPage