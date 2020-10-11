import React from "react";
import * as axios from "axios";
import App from "./App";
import {
  getMovies,
  getMovieById,
  fillArrayMoviesId,
} from "./service/ajaxRequests";

class AppApi extends React.Component {
  /*startSearch(page) {
    this.props.toggleFecth(!this.props.isFetching);
    getMovies(this.props.inputValue, page).then((res) => {
      if (res.Response === "True") {
        this.props.setResponse(true, "");
        this.props.setTotalPages(+res.totalResults);
        fillArrayMoviesId(res.Search).forEach((el) => {
          getMovieById(el).then((res) => this.props.addMovieToState(res));
        });
      } else {
        this.props.setResponse(false, res.Error);
      }

      this.props.toggleFecth(!this.props.isFetching);
    });
  }*/
  getNewMovies(value) {
    this.props.reset();
    this.props.getMovies(value, 1);
  }
  render() {
    return (
      <App
        {...this.props}
        getMovies={(page) => this.props.getMovies(this.props.current, page)}
        getNewMovies={this.getNewMovies.bind(this)}
      />
    );
  }
}
export default AppApi;
