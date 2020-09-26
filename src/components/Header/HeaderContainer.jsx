import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
  changeInputAC,
  toggleFecthAC,
  toggleEnglishAC,
  fillMoviesAC,
} from "../../store/reducer";
import HeaderApi from "./HeaderApi";
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    isFetching: state.isFetching,
    isEnglish: state.isEnglish,
    movieArr: state.movieArr,
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
  };
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApi);
export default HeaderContainer;
