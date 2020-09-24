const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
const TOGGLE_FETCH = "TOGGLE_FETCH";

const initialState = {
  inputValue: "",
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case TOGGLE_FETCH:
      return {
        ...state,
        isFetching: action.fetching,
      };
    default:
      return state;
  }
};

export default reducer;
export const changeInputAC = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
export const toggleFecthAC = (fetching) => ({
  type: TOGGLE_FETCH,
  fetching,
});
