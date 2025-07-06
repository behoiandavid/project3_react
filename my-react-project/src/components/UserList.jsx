import { useEffect, useState } from 'react';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) throw new Error('Ошибка загрузки');
                return res.json();
            })
            .then(setUsers)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h2>Список пользователей</h2>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}