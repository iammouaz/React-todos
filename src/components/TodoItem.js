/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import styles from './TodoItem.module.css';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};
function TodoItem(props) {
  const [editing, setEditing] = useState(false);
  const [initialTitle, setInitialTitle] = useState('');
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (<li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
 <input
  type="checkbox"
  className={styles.checkbox}
  checked={props.todo.completed}
  onChange={() => props.handleChangeProps(props.todo.id)}
/>
<button onClick={() => props.deleteTodoProps(props.todo.id)}>
  Delete
</button>

<span style={props.todo.completed ? completedStyle : null}>
      {props.todo.title}
    </span>
    </div>
    <input
  type="text"
  style={editMode}
  className={styles.textInput}
/>
   </li>
  );
}

export default TodoItem;