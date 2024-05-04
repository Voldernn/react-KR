import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSearch = () => {
    const [login, setlogin] = useState('');
    const history = useNavigate();

    const handleUserSubmit = () => {
        if (login) {
            history(`/user/books/${login}`);
        } else {
            alert('Пожалуйста, введите имя пользователя.');
        }
    };

    return (
        <div className="ID_enter">
            <input
                type="text"
                placeholder="Введите login пользователя"
                value={login}
                onChange={(e) => setlogin(e.target.value)}
            />
            <button onClick={handleUserSubmit}>Отправить</button>
        </div>
    );
};

export default UserSearch;