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
        {props.pages}
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
