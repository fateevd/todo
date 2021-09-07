import React from 'react';
import '../styles/App.css';
import ItemsTodo from './ItemsTodo';

const List = (props) => {
    return (
        <div>
            {props.todos.map((todo, index) => {
                return (
                    <ItemsTodo
                        remove={props.remove}
                        todo={todo}
                        index={index}
                        key={todo.id}
                        done={props.done}
                    />
                );
            })}
        </div>
    );
};

export default List;
