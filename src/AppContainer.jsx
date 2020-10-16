import { connect } from "react-redux";
import {
  changeInputAC,
  resetAC,
  setPageAC,
  setCurrentSearchAC,
} from "./store/actions";
import {
  getMoviesThunkCreator,
  getNewMoviesThunkCreator,
} from "./store/thunks";
import App from "./App";
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    isFetching: state.isFetching,
    isEnglish: state.isEnglish,
    movieArr: state.movieArr,
    page: state.page,
    totalPages: state.totalPages,
    hasResponse: state.hasResponse,
    error: state.error,
    current: state.currentSearch,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeInput: (text) => {
      dispatch(changeInputAC(text));
    },
    reset: () => {
      dispatch(resetAC());
    },
    setPage: (page) => {
      dispatch(setPageAC(page));
    },
    getMovies: (movie, page) => {
      dispatch(getMoviesThunkCreator(movie, page));
    },
    getNewMovies: (movie) => {
      dispatch(getNewMoviesThunkCreator(movie));
    },
    setCurrentSearch: (value) => {
      dispatch(setCurrentSearchAC(value));
    },
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
