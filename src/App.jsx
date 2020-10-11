import React from "react";
import "./App.css";
import AppContainer from "./components/Aplication/AppContainer";
import SearchBar from "./components/SearchBar/SearchBar";

const App = (props) => {
  return (
    <div className="container">
      {/*<AppContainer />*/}
      <SearchBar />
    </div>
  );
};

export default App;
