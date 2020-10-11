import React from "react";
import styles from "./Pagination.module.css";
class Pagination extends React.Component {
  currentPagination(arr, current) {
    if (current >= 4 && current < arr.length - 3) {
      return arr.slice(current - 3, current + 2);
    }
    if (current < 4) {
      return arr.slice(0, 5);
    }
    if (current > arr.length - 4) {
      return arr.slice(arr.length - 5, arr.length);
    }
  }
  paginationAllPages() {
    let allPages = [];
    const start = (
      <button
        className={styles.button}
        onClick={() => {
          this.props.setPage(1);
          this.props.getMovies(1);
        }}
      >
        start
      </button>
    );
    const end = (
      <button
        className={styles.button}
        onClick={() => {
          this.props.setPage(this.props.totalPages);
          this.props.getMovies(this.props.totalPages);
        }}
      >
        end
      </button>
    );
    for (let i = 1; i <= this.props.totalPages; i++) {
      allPages.push(
        <button
          className={
            this.props.currentPage === i ? styles.buttonActive : styles.button
          }
          key={i}
          onClick={() => {
            this.props.setPage(i);
            this.props.getMovies(i);
          }}
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
    return <div>{this.paginationAllPages()}</div>;
  }
}
export default Pagination;
