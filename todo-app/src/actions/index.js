const uuidv4 = require('uuid/v4');

export const initializeTodos = todos => ({
  type: 'INITALIZE_TODOS',
  todos
});

export const startInitializeTodos = () => {
  return dispatch => {
    fetch('http://localhost:8080/todos')
      .then(response => response.json())
      .then(data => dispatch(initializeTodos(data)))
      .catch(error => console.log(error));
  };
};

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const startAddTodo = (title, description) => {
  return dispatch => {
    const newTodo = {
      id: uuidv4(),
      title,
      description: description ? description : '',
      isCompleted: false
    };

    return fetch('http://localhost:8080/todo', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => dispatch(addTodo(newTodo)))
      .catch(error => console.log(error));
  };
};

export const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  id
});

export const startCompleteTodo = id => {
  return dispatch => {
    return fetch(`http://localhost:8080/todo/complete/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => dispatch(completeTodo(id)))
      .catch(error => console.log(error));
  };
};

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});

export const startRemoveTodo = id => {
  return dispatch => {
    return fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => dispatch(removeTodo(id)))
      .catch(error => console.log(error));
  };
};

export const editTodo = (id, title, description) => ({
  type: 'EDIT_TODO',
  id,
  title,
  description
});

export const startEditTodo = (id, title, description) => {
  return dispatch => {
    return fetch(`http://localhost:8080/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => dispatch(editTodo(id, title, description)))
      .catch(error => console.log(error));
  };
};

export const setError = () => ({
  type: 'SET_ERROR'
});

export const resetError = () => ({
  type: 'RESET_ERROR'
});
