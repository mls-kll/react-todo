const defaultState = {
  todos: [
    { id: 0, name: 'todo 1', isCompleted: false },
    { id: 1, name: 'todo 2', isCompleted: false },
    { id: 2, name: 'todo 3', isCompleted: false }
  ]
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default todos;
