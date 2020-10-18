import React from "react";
import styles from "./Pagination.module.css";
import PaginationButton from "../basic/PaginationButton";
class Pagination extends React.PureComponent {
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
    const allPages = new Array(this.props.totalPages);
    const allPagesPagination = allPages
      .fill(0)
      .map((el, i) => (
        <PaginationButton
          key={i}
          i={i}
          setPage={this.props.setPage}
          getMovies={this.props.getMovies}
          current={this.props.current}
          page={this.props.page}
        />
      ));

    return this.props.totalPages
      ? [
          <PaginationButton
            key={"start"}
            i={"start"}
            setPage={this.props.setPage}
            getMovies={this.props.getMovies}
            current={this.props.current}
          />,
          ...this.currentPagination(allPagesPagination, this.props.page),
          <PaginationButton
            i={"end"}
            key={"end"}
            setPage={this.props.setPage}
            getMovies={this.props.getMovies}
            current={this.props.current}
            totalPages={this.props.totalPages}
          />,
        ]
      : [];
  }
  render() {
    return (
      <div className={styles.pagesContainer}>{this.paginationAllPages()}</div>
    );
  }
}
export default Pagination;
