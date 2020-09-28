const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
const TOGGLE_FETCH = "TOGGLE_FETCH";
const TOGGLE_IS_ENGLISH = "TOGGLE_IS_ENGLISH";
const FILL_MOVIE = "FILL_MOVIE";
const PAGE_UP = "PAGE_UP";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_PAGE = "SET_PAGE";
const RESET = "RESET";

const initialState = {
  inputValue: "",
  isFetching: false,
  isEnglish: false,
  movieArr: [],
  page: 1,
  totalPages: 0,
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
    case PAGE_UP:
      return {
        ...state,
        page: state.page++,
      };
    case SET_PAGE:
      return {
        ...state,
        movieArr: [],
        page: action.page,
      };
    case RESET:
      return {
        ...state,
        isFetching: false,
        isEnglish: false,
        movieArr: [],
        page: 1,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: Math.ceil(action.totalResults / 10),
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
export const pageUpAC = () => ({
  type: PAGE_UP,
});
export const resetAC = () => ({
  type: RESET,
});
export const setTotalPagesAC = (totalResults) => ({
  type: SET_TOTAL_PAGES,
  totalResults,
});
export const setPageAC = (page) => ({
  type: SET_PAGE,
  page,
});
