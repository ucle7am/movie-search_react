const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
const TOGGLE_FETCH = "TOGGLE_FETCH";
const TOGGLE_IS_ENGLISH = "TOGGLE_IS_ENGLISH";
const FILL_MOVIE = "FILL_MOVIE";

const initialState = {
  inputValue: "",
  isFetching: false,
  isEnglish: false,
  movieArr: [],
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
    case TOGGLE_IS_ENGLISH:
      return {
        ...state,
        isEnglish: action.isEnglish,
      };
    case FILL_MOVIE:
      return {
        ...state,
        movieArr: [...state.movieArr, action.movie],
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
export const toggleEnglishAC = (isEnglish) => ({
  type: TOGGLE_IS_ENGLISH,
  isEnglish,
});
export const fillMoviesAC = (movie) => ({
  type: FILL_MOVIE,
  movie,
});