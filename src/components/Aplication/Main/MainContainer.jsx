import React from "react";
import Main from "./Main";
const Red = {
  color: "red",
};
const Black = {
  color: "black",
};
class MainContainer extends React.Component {
  pagination = (arr, current) => {
    if (current >= 4 && current < arr.length - 3) {
      return arr.slice(current - 3, current + 2);
    }
    if (current < 4) {
      return arr.slice(0, 5);
    }
    if (current > arr.length - 4) {
      return arr.slice(arr.length - 5, arr.length);
    }
  };
  paginationAllPages() {
    let allPages = [];
    const start = (
      <button
        onClick={() => {
          this.props.setPage(1);
          this.props.getMovies();
        }}
      >
        start
      </button>
    );
    const end = (
      <button
        onClick={() => {
          this.props.setPage(this.props.totalPages);
          this.props.getMovies();
        }}
      >
        end
      </button>
    );
    for (let i = 1; i <= this.props.totalPages; i++) {
      allPages.push(
        <button
          key={i}
          onClick={() => {
            this.props.setPage(i);
            this.props.getMovies();
          }}
          style={this.props.currentPage === i ? Red : Black}
        >
          {i}
        </button>
      );
    }
    return this.props.totalPages
      ? [start, ...this.pagination(allPages, this.props.currentPage), end]
      : [];
  }

  render() {
    return (
      <Main
        movieArr={this.props.movieArr}
        pages={this.paginationAllPages()}
        currentPage={this.props.currentPage}
        getMovies={this.props.getMovies}
        setPage={this.props.setPage}
      />
    );
  }
}
export default MainContainer;
