import React from "react";
import Header from "./Header";
import * as axios from "axios";

class HeaderApi extends React.Component {
  getMovies() {
    this.props.toggleFecth(!this.props.isFetching);
    axios
      .get(
        `https://www.omdbapi.com/?s=${this.props.inputValue}&apikey=b2dcd879`
      )
      .then((res) => {
        console.log(res);
        this.props.toggleFecth(!this.props.isFetching);
      });
  }
  render() {
    return (
      <Header
        getMovies={this.getMovies.bind(this)}
        isFetching={this.props.isFetching}
        inputValue={this.props.inputValue}
        changeInput={this.props.changeInput}
        toggleFecth={this.props.toggleFecth}
      />
    );
  }
}
export default HeaderApi;
