import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const CounterPage = () => {

    const title  = useSelector(state => state.counterValue)
    const dispatch=useDispatch()

    const increment = ()=>{
        dispatch({
            type: 'INCREMENT',
            payload: title+1
        })
    }
    const decrement = ()=>{
        dispatch({
            type: 'DECREMENT',
            payload: title-1
        })
    }
    const reset=()=>{
        dispatch({
            type: 'RESET',
            payload: 0
        })
    }
    const plusTen=()=>{
        dispatch({
            type: 'PLUS_TEN',
            payload: title+10
        })
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={plusTen}>+10</button>
        </div>
    );
};

export default CounterPage;