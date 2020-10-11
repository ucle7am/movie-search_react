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
