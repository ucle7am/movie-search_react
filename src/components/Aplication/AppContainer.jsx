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
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(appApi);
export default AppContainer;
