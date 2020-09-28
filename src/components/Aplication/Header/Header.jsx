import React from "react";

const Header = (props) => {
  let ref = React.createRef();
  const changeInput = () => {
    let text = ref.current.value;
    props.changeInput(text);
  };
  return (
    <div>
      <h1>movie search</h1>
      {props.isFetching ? <p>fetching</p> : <p>not fetching</p>}
      <input
        onChange={changeInput}
        ref={ref}
        type="text"
        value={props.inputValue}
      />
      <button onClick={() => props.getMovies()}>SEARCH</button>
      <div>
        {props.isEnglish ? (
          <p>showing results for movie '{props.inputValue}'</p>
        ) : (
          <p>write in english</p>
        )}
      </div>
    </div>
  );
};
export default Header;
