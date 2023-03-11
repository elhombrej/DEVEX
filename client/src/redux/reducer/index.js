const initialState = {
  myPreference: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case "POST_PREFERENCE":
      return {
        ...state,
        myPreference: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
