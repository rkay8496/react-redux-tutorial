import React from 'react';
import { useSelector } from 'react-redux';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    ></Todos>
  );
};

export default React.memo(TodosContainer);