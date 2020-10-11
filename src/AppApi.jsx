import React from "react";
import * as axios from "axios";
import App from "./App";

class AppApi extends React.Component {
  isEnglish(word) {
    const pattern = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/g;
    const result = pattern.test(word);
    this.props.toggleEnglish(result);
    return result;
  }
  getMovies(page) {
    if (this.isEnglish(this.props.inputValue)) {
      this.props.toggleFecth(!this.props.isFetching);
      axios
        .get(
          `https://www.omdbapi.com/?s=${this.props.inputValue}&page=${page}&apikey=b2dcd879`
        )
        .then((res) => {
          if (res.data.Response === "True") {
            this.props.setResponse(true, "");
            this.props.setTotalPages(+res.data.totalResults);
            this.fillArrayMoviesId(res.data.Search).forEach((el) => {
              this.getMovieById(el).then((res) =>
                this.props.addMovieToState(res)
              );
            });
          } else {
            this.props.setResponse(false, res.data.Error);
          }

          this.props.toggleFecth(!this.props.isFetching);
        });
    }
  }
  getNewMovies() {
    this.props.reset();
    this.getMovies(1);
  }
  getMovieById(id) {
    return axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=b2dcd879`)
      .then((res) => res.data);
  }
  fillArrayMoviesId(arr) {
    return arr.map((el) => el.imdbID);
  }
  render() {
    return (
      <App
        {...this.props}
        getMovies={this.getMovies.bind(this)}
        getNewMovies={this.getNewMovies.bind(this)}
      />
    );
  }
}
export default AppApi;
