import React from "react";
import "./App.css";
import Main from "./screens/Main";
import SearchBar from "./components/SearchBar/SearchBar";

const App = ({ movieArr, ...props }) => {
  return (
    <div className="container">
      <SearchBar {...props} />
      <Main movieArr={movieArr} {...props} />
    </div>
  );
};

export default App;
