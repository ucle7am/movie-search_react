import React from "react";
import Header from "./Header";
import * as axios from "axios";
import Main from "./Main/Main";

class HeaderApi extends React.Component {
  isEnglish(word) {
    const pattern = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/g;
    const result = pattern.test(word);
    this.props.toggleEnglish(result);
    return result;
  }
  getMovies() {
    if (this.isEnglish(this.props.inputValue)) {
      this.props.toggleFecth(!this.props.isFetching);
      axios
        .get(
          `https://www.omdbapi.com/?s=${this.props.inputValue}&page=${this.props.page}&apikey=b2dcd879`
          /*`https://www.omdbapi.com/?s=${this.props.inputValue}&apikey=b2dcd879`*/
        )
        .then((res) => {
          console.log(res);
          console.log(this.fillMovieArrayId(res.data.Search));

          this.fillMovieArrayId(res.data.Search).forEach((el) => {
            this.getMovieById(el).then((res) => this.props.fillMovies(res));
          });
          this.props.pageUp();
          this.props.toggleFecth(!this.props.isFetching);
        });
    }
  }
  getNewMovies() {
    this.props.reset();
    this.getMovies();
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
          getMovies={this.getNewMovies.bind(this)}
          isFetching={this.props.isFetching}
          inputValue={this.props.inputValue}
          changeInput={this.props.changeInput}
          toggleFecth={this.props.toggleFecth}
          isEnglish={this.props.isEnglish}
        />
        <Main
          getMovies={this.getMovies.bind(this)}
          movieArr={this.props.movieArr}
        />
      </div>
    );
  }
}
export default HeaderApi;
