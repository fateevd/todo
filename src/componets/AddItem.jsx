import React, {useState} from 'react';
import '../styles/Form.modul.css';
import {Button} from '../UI/AddButton/Button';

const AddItem = ({create}) => {
    const [todos, setTodos] = useState({title: ''});

    const AddNewPost = e => {
        e.preventDefault();
        if (todos.title !== '') {
            const newPost = {
                ...todos,
                id: Date.now(),
            };
            create(newPost);
            setTodos({title: ''});
        } else {
            setTodos({title: ''});
            alert('Ты че, а? ');
        }
    };

    return (
        <form className='form'>
            <input
                className='input '
                type='text'
                value={todos.title}
                onChange={e => setTodos({...todos, title: e.target.value})}
            />
            <Button onClick={AddNewPost}>Добавить</Button>
        </form>
    );
};

export default AddItem;
