import React from 'react';
import '../styles/App.css';

function ItemsTodo({ todo, index, remove, done }) {
  const classes = ['list'];
  const classesMain = ['main-list'];

  if (todo.marker) {
    classes.push('done');
    classesMain.push('mimo');
  }

  return (
    <div className={classesMain.join(' ')}>
      <div className={classes.join(' ')} onClick={() => done(todo.id)}>
        <div className='number'>{index + 1}</div>
        <div className='description'>{todo.title}</div>
      </div>
      <button className='btn' onClick={() => remove(todo)}>
        Удалить
      </button>
    </div>
  );
}

export default ItemsTodo;
