import {
  CHANGE_INPUT_VALUE,
  TOGGLE_FETCH,
  TOGGLE_IS_ENGLISH,
  ADD_MOVIE,
  SET_TOTAL_PAGES,
  SET_PAGE,
  RESET,
  TOGGLE_RESPONSE,
  SET_CURRENT_SEARCH,
} from "./types";

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
