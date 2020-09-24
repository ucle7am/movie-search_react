import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { changeInputAC, toggleFecthAC } from "../../store/reducer";
import HeaderApi from "./HeaderApi";
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    isFetching: state.isFetching,
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
  };
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApi);
export default HeaderContainer;
