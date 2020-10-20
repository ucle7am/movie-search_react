import React from "react";
import "./App.css";
import Main from "./screens/Main";
import SearchBar from "./components/SearchBar/SearchBar";

interface AppProps{
  movieArr: Array<any>,
  setPopUpImg(title: string) : void,
  popUpImg: string,
  isFetching: boolean,
  changeInput(title: string) : void,
  inputValue: string,
  getNewMovies(title: string) : void,
  setCurrentSearch(title: string) : void,
  current: string,
}
const App: React.FC<AppProps> = ({ movieArr, ...props }) => {
  return (
    <>
      <div className="container">
        <SearchBar {...props} />
        <Main movieArr={movieArr} {...props} />
        <div
          style={props.popUpImg.length > 0 ? {} : { display: "none" }}
          className="popUp"
        >
          <img
            onClick={() => props.setPopUpImg("")}
            src={props.popUpImg}
            alt="..."
          />
        </div>
      </div>
      <div
        style={props.popUpImg.length > 0 ? {} : { display: "none" }}
        className="shadow"
      ></div>
    </>
  );
};

export default App;
