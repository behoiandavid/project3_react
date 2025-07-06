import { useState } from 'react';

export default function ControlledForm() {
    const [formData, setFormData] = useState({ name: '', subscribe: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Имя: ${formData.name}, Подписка: ${formData.subscribe}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Контролируемая форма</h2>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите имя"
            />
            <label>
                <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                />
                Подписаться
            </label>
            <button type="submit">Отправить</button>
        </form>
    );
}