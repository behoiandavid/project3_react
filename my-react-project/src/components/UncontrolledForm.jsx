import { useRef } from 'react';

export default function UncontrolledForm() {
    const nameRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Имя: ${nameRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Неконтролируемая форма</h2>
            <input type="text" ref={nameRef} placeholder="Введите имя" />
            <button type="submit">Отправить</button>
        </form>
    );
}