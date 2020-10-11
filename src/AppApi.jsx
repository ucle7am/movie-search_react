import React from "react";
import App from "./App";

class AppApi extends React.Component {
  getNewMovies(value) {
    this.props.reset();
    this.props.getMovies(value, 1);
  }
  render() {
    return (
      <App
        {...this.props}
        getMovies={(page) => this.props.getMovies(this.props.current, page)}
        getNewMovies={this.getNewMovies.bind(this)}
      />
    );
  }
}
export default AppApi;
