export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
});

export const completeTodo = (id) => ({
    type: 'COMPLETE_TODO',
    id
  });

  export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
  });
  
