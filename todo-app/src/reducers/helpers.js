const defaultState = {
  updatedTitle: null,
  updatedDescription: '',
  timer: null
};

const helpers = (state = defaultState, action) => {
  switch (action.type) {
    case 'HANDLE_EDIT_TITLE':
      return {
        ...state,
        updatedTitle: action.updatedTitle
      };

    case 'HANDLE_EDIT_DESCRIPTION':
      return {
        ...state,
        updatedDescription: action.updatedDescription
      };
    case 'HANDLE_TIMEOUT':
      return {
        ...state,
        timer: action.timer
      };
    default:
      return state;
  }
};

export default helpers;
