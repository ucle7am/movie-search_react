import { connect } from "react-redux";
import {
  changeInputAC,
  toggleFecthAC,
  toggleEnglishAC,
  fillMoviesAC,
  pageUpAC,
  resetAC,
  setTotalPagesAC,
  setPageAC,
  setResponseAC,
} from "../../store/reducer";
import appApi from "./appApi";
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    isFetching: state.isFetching,
    isEnglish: state.isEnglish,
    movieArr: state.movieArr,
    page: state.page,
    totalPages: state.totalPages,
    isResponse: state.isResponse,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeInput: (text) => {
      dispatch(changeInputAC(text));
    },
    toggleFecth: (fetching) => {
      dispatch(toggleFecthAC(fetching));
    },
    toggleEnglish: (english) => {
      dispatch(toggleEnglishAC(english));
    },
    fillMovies: (movie) => {
      dispatch(fillMoviesAC(movie));
    },
    pageUp: () => {
      dispatch(pageUpAC());
    },
    reset: () => {
      dispatch(resetAC());
    },
    setTotalPages: (pages) => {
      dispatch(setTotalPagesAC(pages));
    },
    setPage: (page) => {
      dispatch(setPageAC(page));
    },
    setResponse: (response, error) => {
      dispatch(setResponseAC(response, error));
    },
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(appApi);
export default AppContainer;
