import React, { useState } from "react";
import './App.css'


const propsValues = {
    title: "Список группы",
    items: [
        "Студент 1",
        "Студент 2",
        "Студент 3",
        "Студент 4",
        "Студент 5",
        "Студент 6"
    ]
};

const App = () => {
    const [state, setState] = useState("off");
    const [text, setText] = useState('Поиск');

    const press = () => {
        const newState = state === 'off' ? 'Нажми' : 'off';
        setState(newState);
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <button onClick={press}>
                {state}
            </button>
            <h1>{text}</h1>
            <p>Напишите вместо "Поиск" например "Студент" или цифру 2</p>
            <input
                value={text}
                onChange={onChange}
            />
            <h1>{propsValues.title}:</h1>
            <div className='studentList'>
                {propsValues.items.map((student) => (
                    student.includes(text) && text
                    ? <p key={student}>{student}</p>
                    : null
                )
                )}
            </div>
        </div>
    );
}

export default App;

// componentWillReceiveProps не поддерживается
