const uuidv4 = require('uuid/v4');
const defaultState = {
  todos: [
    { id: 0, name: 'todo 1', isCompleted: false },
    { id: 1, name: 'todo 2', isCompleted: false },
    { id: 2, name: 'todo 3', isCompleted: false }
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
          name: action.todo,
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
