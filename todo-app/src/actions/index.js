export const addTodo = () => ({
  type: 'ADD_TODO'
});

export const completeTodo = () => ({
    type: 'COMPLETE_TODO'
  });

  export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
  });
  
