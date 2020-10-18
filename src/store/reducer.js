import {
  CHANGE_INPUT_VALUE,
  TOGGLE_FETCH,
  TOGGLE_IS_ENGLISH,
  ADD_MOVIES,
  SET_TOTAL_PAGES,
  SET_PAGE,
  RESET,
  TOGGLE_RESPONSE,
  SET_CURRENT_SEARCH,
  SET_POP_UP_IMG,
} from "./types";

const initialState = {
  inputValue: "",
  currentSearch: "",
  isFetching: false,
  hasResponse: "",
  popUpImg: "",
  error: "",
  movieArr: [],
  page: 1,
  totalPages: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POP_UP_IMG:
      return {
        ...state,
        popUpImg: action.src,
      };
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
    case ADD_MOVIES:
      return {
        ...state,
        movieArr: [...action.movies],
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
