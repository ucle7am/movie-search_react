import {
  getMovies,
  getMovieById,
  fillArrayMoviesId,
} from "../service/ajaxRequests";
const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
const TOGGLE_FETCH = "TOGGLE_FETCH";
const TOGGLE_IS_ENGLISH = "TOGGLE_IS_ENGLISH";
const ADD_MOVIE = "ADD_MOVIE";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_PAGE = "SET_PAGE";
const RESET = "RESET";
const TOGGLE_RESPONSE = "TOGGLE_RESPONSE";
const SET_CURRENT_SEARCH = "SET_CURRENT_SEARCH";
const initialState = {
  inputValue: "",
  currentSearch: "",
  isFetching: false,
  isEnglish: false,
  hasResponse: "",
  error: "",
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
    case TOGGLE_RESPONSE:
      return {
        ...state,
        hasResponse: action.response,
        error: action.error,
      };
    case SET_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.value,
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
    case ADD_MOVIE:
      return {
        ...state,
        movieArr: [...state.movieArr, action.movie],
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

export const getMoviesThunkCreator = (movie, page) => {
  return (dispatch) => {
    dispatch(toggleFecthAC(true));
    getMovies(movie, page).then((res) => {
      if (res.Response === "True") {
        dispatch(setResponseAC(true, ""));
        dispatch(setTotalPagesAC(+res.totalResults));
        fillArrayMoviesId(res.Search).forEach((el) => {
          getMovieById(el).then((res) => dispatch(addMovieToStateAC(res)));
        });
      } else {
        dispatch(setResponseAC(false, res.Error));
      }

      dispatch(toggleFecthAC(false));
    });
  };
};
export const changeInputAC = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
export const setCurrentSearchAC = (value) => ({
  type: SET_CURRENT_SEARCH,
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
export const addMovieToStateAC = (movie) => ({
  type: ADD_MOVIE,
  movie,
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
export const setResponseAC = (response, error) => ({
  type: TOGGLE_RESPONSE,
  response,
  error,
});
