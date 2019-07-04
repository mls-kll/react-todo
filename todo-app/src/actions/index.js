export const addTodo = () => ({
  type: 'ADD_TODO'
});

export const completeTodo = (id) => ({
    type: 'COMPLETE_TODO',
    id
  });

  export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
  });
  
