import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addData } from '../../redux/actions';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.usersReducer);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addData({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Добавить</button>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Почта</th>
                    <th>Пароль</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </form>
    );
};

export default LoginPage;
