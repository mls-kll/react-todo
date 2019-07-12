const defaultState = {
  updatedTitle: null,
  updatedDescription: ''
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

    default:
      return state;
  }
};

export default helpers;
