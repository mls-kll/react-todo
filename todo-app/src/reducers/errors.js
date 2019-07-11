const defaultState = {
  isError: false
};

const errors = (state = defaultState, action) => {
  switch (action.type) {
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

export default errors;
