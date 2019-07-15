const defaultState = {
  filteredTodos: null,
  hasFiltered: false,
  suggestedTodos: null,
  isSuggesting: false
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
    case 'GET_SUGGESTIONS':
      return {
        ...state,
        suggestedTodos: action.suggestedTodos
          ? [...action.suggestedTodos]
          : action.suggestedTodos,
        isSuggesting: true
      };
    case 'RESET_SUGGESTION':
      return {
        ...state,
        isSuggesting: false
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
