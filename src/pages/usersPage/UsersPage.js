import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addUserAction,
    changeInputAction,
    clearUserAction,
    deleteAllAction
} from "../../redux/actions";

const UsersPage = () => {
    const dispatch= useDispatch()
    const {value,users}= useSelector(state => state.usersReducer)
    const changeInput=(event)=>{
        dispatch(changeInputAction(event.target.value))
    }
    const addUser=()=>{
        dispatch(addUserAction(value))
    }
    const clearUser=()=>{
        dispatch(clearUserAction())
    }
    const deleteUser=()=>{
        dispatch(deleteAllAction())
    }
    return (
        <div>
            <input
                value={value}
                type='text'
                placeholder='name'
                onChange={changeInput}
            />
            <button onClick={addUser}>add</button>
            <button onClick={clearUser}>clear</button>
            <button onClick={deleteUser}>delete all</button>
            {users.map((user,idx)=> <h1 key={idx} >{user}</h1>)}
        </div>
    );
};

export default UsersPage;