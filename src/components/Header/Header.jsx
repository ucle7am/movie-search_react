import React from "react";

const Header = (props) => {
  console.log(props);
  let ref = React.createRef();
  const changeInput = () => {
    let text = ref.current.value;
    props.changeInput(text);
  };
  return (
    <div>
      <p>header</p>
      {props.isFetching ? <p>fetching</p> : <p>not fetching</p>}
      <input
        onChange={changeInput}
        ref={ref}
        type="text"
        value={props.inputValue}
      />
      <button onClick={() => props.getMovies()}>SEARCH</button>
    </div>
  );
};
export default Header;
