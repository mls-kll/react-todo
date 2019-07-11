const todos = (state = [], action) => {
  switch (action.type) {
    case 'INITALIZE_TODOS':
      return action.todos;

    case 'ADD_TODO':
      return [...state, action.todo];

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);

    case 'COMPLETE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, title: action.title, description: action.description }
          : todo
      );

    default:
      return state;
  }
};

export default todos;
