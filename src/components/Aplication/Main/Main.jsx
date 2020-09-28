import React from "react";

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
      <div>{props.pages}</div>
    </div>
  );
};
export default Main;
