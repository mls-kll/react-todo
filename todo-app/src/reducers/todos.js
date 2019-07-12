const defaultState = {
  todos: [],
  hasLoaded: false
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'INITALIZE_TODOS':
      return {
        ...state,
        hasLoaded: true,
        todos: action.todos
      };

    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.todo] };

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        )
      };

    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, title: action.title, description: action.description }
            : todo
        )
      };

    default:
      return state;
  }
};

export default todos;
