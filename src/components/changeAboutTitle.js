import React from 'react';
import {useDispatch} from "react-redux";

const ChangeAboutTitle = () => {

    const dispatch = useDispatch()
    const ChangeAboutTitle=()=>{
        dispatch({
            type: 'CHANGE_ABOUT_TITLE'
        })
    }

    return (
        <div>
            <button onClick={ChangeAboutTitle}>change about title</button>
        </div>
    );
};

export default ChangeAboutTitle;