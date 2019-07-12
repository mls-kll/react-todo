const defaultState = {
  filteredTodos: null,
  hasFiltered: false
};

const filters = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_TODOS':
      return {
        ...state,
        filteredTodos: action.filteredTodos
          ? [...action.filteredTodos]
          : action.filteredTodos,
        hasFiltered: true
      };
    case 'RESET_FILTER':
      return {
        ...state,
        filteredTodos: null,
        hasFiltered: false
      };
    default:
      return state;
  }
};
export default filters;
