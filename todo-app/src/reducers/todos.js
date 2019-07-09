const defaultState = {
  todos: [],
  isError: false
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'INITALIZE_TODOS':
      return {
        ...state,
        todos: action.todos
      };

    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo],
        isError: false
      };

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

    case 'ADD_DESCRIPTION':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, description: action.description }
            : todo
        )
      };

    case 'EDIT_TITLE':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, title: action.title } : todo
        ),
        isError: false
      };

    case 'SET_ERROR':
      return {
        ...state,
        isError: true
      };

    case 'RESET_ERROR':
      return {
        ...state,
        isError: false
      };
    default:
      return state;
  }
};

export default todos;
