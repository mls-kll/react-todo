const uuidv4 = require('uuid/v4');

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const startAddTodo = (title, description) => {
  return (dispatch, getState) => {
    const newTodo = {
      id: uuidv4(),
      title,
      description
    };

    const todos = getState().todos;
    const newTodos = [...todos, newTodo];

    return new Promise((resolve, reject) => {
      resolve(localStorage.setItem('todos', JSON.stringify(newTodos)));
    }).then(() => dispatch(addTodo(newTodo)));
  };
};

export const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  id
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});

export const addDescription = (id, description) => ({
  type: 'ADD_DESCRIPTION',
  id,
  description
});

export const editTitle = (id, title) => ({
  type: 'EDIT_TITLE',
  id,
  title
});

export const setError = () => ({
  type: 'SET_ERROR'
});

export const resetError = () => ({
  type: 'RESET_ERROR'
});
