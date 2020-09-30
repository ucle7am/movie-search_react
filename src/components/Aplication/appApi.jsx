import React from "react";
import Header from "./Header/Header";
import * as axios from "axios";
import MainContainer from "./Main/MainContainer";

class appApi extends React.Component {
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
            this.fillMovieArrayId(res.data.Search).forEach((el) => {
              this.getMovieById(el).then((res) => this.props.fillMovies(res));
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
  fillMovieArrayId(arr) {
    return arr.map((el) => el.imdbID);
  }
  render() {
    return (
      <div>
        <Header
          isResponse={this.props.isResponse}
          error={this.props.error}
          getMovies={this.getNewMovies.bind(this)}
          isFetching={this.props.isFetching}
          inputValue={this.props.inputValue}
          changeInput={this.props.changeInput}
          toggleFecth={this.props.toggleFecth}
          isEnglish={this.props.isEnglish}
        />
        <MainContainer
          getMovies={this.getMovies.bind(this)}
          movieArr={this.props.movieArr}
          totalPages={this.props.totalPages}
          currentPage={this.props.page}
          setPage={this.props.setPage}
        />
      </div>
    );
  }
}
export default appApi;
