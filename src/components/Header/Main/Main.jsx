import React from "react";

const Main = (props) => {
  const movieCards = props.movieArr.map((el) => {
    return (
      <div>
        <p>{el.Title}</p>
      </div>
    );
  });
  return <div>{movieCards}</div>;
};
export default Main;
