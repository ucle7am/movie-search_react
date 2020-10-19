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
  return async (dispatch) => {
    dispatch(toggleFecthAC(true));
    const movies = await getMovies(movie, page);
    if (movies.Response === "True") {
      dispatch(setResponseAC(true, ""));
      dispatch(setTotalPagesAC(+movies.totalResults));
      const promiseArray = fillArrayMoviesId(movies.Search).map((el) => getMovieById(el));
      const promiseArrayResolvedMovies = await Promise.all(promiseArray);
      dispatch(addMoviesToStateAC(promiseArrayResolvedMovies));
    }else {
      dispatch(setResponseAC(false, movies.Error));
    }
    dispatch(toggleFecthAC(false));
  };
};
export const getNewMoviesThunkCreator = (movie) => {
  return (dispatch) => {
    dispatch(resetAC());
    dispatch(getMoviesThunkCreator(movie, 1));
  };
};
