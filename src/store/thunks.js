import {
  getMovies,
  getMovieById,
  fillArrayMoviesId,
} from "../service/ajaxRequests";
import {
  toggleFecthAC,
  setTotalPagesAC,
  addMovieToStateAC,
  setResponseAC,
} from "./actions";
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
