import React from "react";
import "./App.css";
import Main from "./screens/Main";
import SearchBar from "./components/SearchBar/SearchBar";

const App = (props) => {
  return (
    <div className="container">
      <SearchBar {...props} />
      <Main {...props} />
    </div>
  );
};

export default App;
