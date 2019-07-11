const defaultState = {
  filteredTodos: null
};

const filters = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_TODOS':
      return {
        filteredTodos: action.filteredTodos
          ? [...action.filteredTodos]
          : action.filteredTodos
      };
    default:
      return state;
  }
};
export default filters;
