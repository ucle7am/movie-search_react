import React from "react";
import "./App.css";
import AppContainer from "./components/Aplication/AppContainer";
import Main from "./screens/Main";
import SearchBar from "./components/SearchBar/SearchBar";

const App = (props) => {
  console.log(props);
  return (
    <div className="container">
      {/*<AppContainer />*/}
      <SearchBar {...props} />
      <Main {...props} />
    </div>
  );
};

export default App;
