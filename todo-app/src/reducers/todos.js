const uuidv4 = require('uuid/v4');
const defaultState = {
  todos: [
    {
      id: 0,
      title: 'todo 1',
      isCompleted: false,
      description: 'todo 1 description'
    },
    {
      id: 1,
      title: 'todo 2',
      isCompleted: false,
      description: 'todo 2 description'
    },
    {
      id: 2,
      title: 'todo 3',
      isCompleted: false,
      description: 'todo 3 description'
    }
  ],
  isError: false,
  errorMessage: 'your input field is empty'
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (action.todo.length < 1) {
        return {
          ...state,
          isError: true
        };
      } else {
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
      }

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
