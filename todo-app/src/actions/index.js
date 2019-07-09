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
      description,
      isCompleted: false
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

export const startCompleteTodo = id => {
  return (dispatch, getState) => {
    const todos = getState().todos;
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    return new Promise((resolve, reject) => {
      resolve(localStorage.setItem('todos', JSON.stringify(updatedTodos)));
    }).then(() => dispatch(completeTodo(id)));
  };
};

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});

export const startRemoveTodo = id => {
  return (dispatch, getState) => {
    const todos = getState().todos;
    const updatedTodos = todos.filter(todo => todo.id !== id);

    return new Promise((resolve, reject) => {
      resolve(localStorage.setItem('todos', JSON.stringify(updatedTodos)));
    }).then(() => dispatch(removeTodo(id)));
  };
};

export const addDescription = (id, description) => ({
  type: 'ADD_DESCRIPTION',
  id,
  description
});

export const startAddDescription = (id, description) => {
  return (dispatch, getState) => {
    const todos = getState().todos;
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, description: description } : todo
    );

    return new Promise((resolve, reject) => {
      resolve(localStorage.setItem('todos', JSON.stringify(updatedTodos)));
    }).then(() => dispatch(addDescription(id, description)));
  };
};

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

export const initializeTodos = todos => ({
  type: 'INITALIZE_TODOS',
  todos
});

export const startInitializeTodos = () => {
  return dispatch => {
    const newTodos = localStorage.getItem('todos');
    return new Promise((resolve, reject) => resolve(newTodos)).then(() =>
      dispatch(initializeTodos(JSON.parse(newTodos)))
    );
  };
};
