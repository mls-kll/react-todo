const uuidv4 = require('uuid/v4');
const defaultState = {
  todos: [
    {
      id: 0,
      title: 'todo 1',
      isCompleted: false,
      description: 'SSS',
      showEdit: false
    },
    {
      id: 1,
      title: 'todo 2',
      isCompleted: true,
      description: 'todo 2 description',
      showEdit: false
    },
    {
      id: 2,
      title: 'todo 3',
      isCompleted: false,
      description: 'todo 3 description',
      showEdit: false
    }
  ],
  isError: false,
  selectedTodo: null,
  errorMessage: 'your input field is empty'
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        title: action.todo,
        isCompleted: false,
        id: uuidv4()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
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
    case 'SET_SELECTED_TODO':
      return {
        ...state,
        selectedTodo: action.id
      };

    case 'ADD_DESCRIPTION':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, description: action.description, showEdit: false }
            : todo
        )
      };
    case 'EDIT_TITLE':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, title: action.title, showEdit: false }
            : todo
        )
      };
    case 'SET_ERROR':
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
};

export default todos;
