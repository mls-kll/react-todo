export const addTodo = (title, description) => ({
  type: 'ADD_TODO',
  title,
  description
});

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
