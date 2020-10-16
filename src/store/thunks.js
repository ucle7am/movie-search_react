import {
  getMovies,
  getMovieById,
  fillArrayMoviesId,
} from "../service/ajaxRequests";
import {
  toggleFecthAC,
  setTotalPagesAC,
  addMoviesToStateAC,
  setResponseAC,
  resetAC,
} from "./actions";

export const getMoviesThunkCreator = (movie, page) => {
  return (dispatch) => {
    dispatch(toggleFecthAC(true));
    getMovies(movie, page).then((res) => {
      if (res.Response === "True") {
        dispatch(setResponseAC(true, ""));
        dispatch(setTotalPagesAC(+res.totalResults));
        const promiseArray = fillArrayMoviesId(res.Search).map((el) => {
          return getMovieById(el);
        });
        const promiseArrayResolved = Promise.all(promiseArray);
        promiseArrayResolved.then((res) => {
          dispatch(addMoviesToStateAC(res));
          dispatch(toggleFecthAC(false));
        });
      } else {
        dispatch(setResponseAC(false, res.Error));
      }
    });
  };
};
export const getNewMoviesThunkCreator = (movie) => {
  return (dispatch) => {
    dispatch(resetAC());
    dispatch(getMoviesThunkCreator(movie, 1));
  };
};
