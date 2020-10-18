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
export const setPopUpImgAC = (src) => ({
  type: SET_POP_UP_IMG,
  src,
});
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
export const addMoviesToStateAC = (movies) => ({
  type: ADD_MOVIES,
  movies,
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
