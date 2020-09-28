import React from "react";

const Red = {
  color: "red",
};
const Black = {
  color: "black",
};
const Main = (props) => {
  console.log(props);
  const movieCards = props.movieArr.map((el) => {
    return (
      <div>
        <p>{el.Title}</p>
      </div>
    );
  });
  let allPages = [];
  for (let i = 1; i <= props.totalPages; i++) {
    allPages.push(
      <button
        onClick={() => {
          props.setPage(i);
          props.getMovies();
        }}
        style={props.currentPage === i ? Red : Black}
      >
        {i}
      </button>
    );
  }
  const pagination = (arr, current) => {
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
  return (
    <div>
      <div>{movieCards}</div>
      <div>
        <button
          onClick={() => {
            props.setPage(1);
            props.getMovies();
          }}
        >
          start
        </button>
        {pagination(allPages, props.currentPage)}
        <button
          onClick={() => {
            props.setPage(props.totalPages);
            props.getMovies();
          }}
        >
          end
        </button>
      </div>
    </div>
  );
};
export default Main;
