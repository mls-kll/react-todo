const defaultState = {
  query: ''
};

const filters = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_TODOS':
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
};
export default filters;
