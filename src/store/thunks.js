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
    if (movies !== 'bad request' && movies.Response === "True") {
      dispatch(setResponseAC(true, ""));
      dispatch(setTotalPagesAC(+movies.totalResults));
      const promiseArray = fillArrayMoviesId(movies.Search).map((el) => getMovieById(el));
      const promiseArrayResolvedMovies = await Promise.all(promiseArray);
      dispatch(addMoviesToStateAC(promiseArrayResolvedMovies));
    }else if(movies !== 'bad request' && movies.Response === "False"){
      dispatch(setResponseAC(false, movies.Error));
    }else if(movies === 'bad request'){
      dispatch(setResponseAC(false, movies));
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
