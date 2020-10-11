import React from "react";
import * as axios from "axios";
import App from "./App";
import { getMovies, getMovieById } from "./service/ajaxRequests";

class AppApi extends React.Component {
  startSearch(page) {
    this.props.toggleFecth(!this.props.isFetching);
    getMovies(this.props.inputValue, page).then((res) => {
      if (res.Response === "True") {
        this.props.setResponse(true, "");
        this.props.setTotalPages(+res.totalResults);
        this.fillArrayMoviesId(res.Search).forEach((el) => {
          getMovieById(el).then((res) => this.props.addMovieToState(res));
        });
      } else {
        this.props.setResponse(false, res.Error);
      }

      this.props.toggleFecth(!this.props.isFetching);
    });
  }
  getNewMovies() {
    this.props.reset();
    this.startSearch(1);
  }
  fillArrayMoviesId(arr) {
    return arr.map((el) => el.imdbID);
  }
  render() {
    return (
      <App
        {...this.props}
        getMovies={this.startSearch.bind(this)}
        getNewMovies={this.getNewMovies.bind(this)}
      />
    );
  }
}
export default AppApi;
