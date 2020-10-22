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
    const allPages = new Array(this.props.totalPages).fill(0);
    const allPagesPagination = allPages.map((el,i) => i + 1)
    const allPagesButtons  = allPagesPagination.map((el) => (
        <PaginationButton
          key={el}
          i={el}
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
            i={"<"}
            setPage={this.props.setPage}
            getMovies={this.props.getMovies}
            current={this.props.current}
          />,
          ...this.currentPagination(allPagesButtons, this.props.page),
          <PaginationButton
            i={">"}
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
