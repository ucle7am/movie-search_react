import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
  changeInputAC,
  toggleFecthAC,
  toggleEnglishAC,
  fillMoviesAC,
  pageUpAC,
  resetAC,
} from "../../store/reducer";
import HeaderApi from "./HeaderApi";
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    isFetching: state.isFetching,
    isEnglish: state.isEnglish,
    movieArr: state.movieArr,
    page: state.page,
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
  };
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApi);
export default HeaderContainer;
