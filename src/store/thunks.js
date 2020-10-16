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
      let arr;
      if (res.Response === "True") {
        dispatch(setResponseAC(true, ""));
        dispatch(setTotalPagesAC(+res.totalResults));
        arr = fillArrayMoviesId(res.Search).map((el) => {
          return getMovieById(el);
        });

        let b = Promise.all(arr);
        b.then((res) => {
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
