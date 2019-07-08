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
  isError: false
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        title: action.title,
        description: action.description,
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

    case 'ADD_DESCRIPTION':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id == action.id
            ? { ...todo, description: action.description }
            : todo
        )
      };
    case 'EDIT_TITLE':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id == action.id ? { ...todo, title: action.title } : todo
        ),
        isError: false
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
