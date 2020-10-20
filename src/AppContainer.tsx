import { connect } from "react-redux";
import {
  changeInputAC,
  resetAC,
  setPageAC,
  setCurrentSearchAC,
  setPopUpImgAC,
} from "./store/actions";
import {
  getMoviesThunkCreator,
  getNewMoviesThunkCreator,
} from "./store/thunks";
import App from "./App";
interface stateToPros {
  inputValue:string,
  isFetching:boolean,
  movieArr: Array<object>,
  page: number,
  totalPages: number,
  hasResponse: string,
  error: string,
  currentSearch: string,
  popUpImg: string,
}
const mapStateToProps = (state:stateToPros) => {
  return {
    inputValue: state.inputValue,
    isFetching: state.isFetching,
    movieArr: state.movieArr,
    page: state.page,
    totalPages: state.totalPages,
    hasResponse: state.hasResponse,
    error: state.error,
    current: state.currentSearch,
    popUpImg: state.popUpImg,
  };
};
const mapDispatchToProps = (dispatch:Function) => {
  return {
    changeInput: (text:string) => {
      dispatch(changeInputAC(text));
    },
    reset: () => {
      dispatch(resetAC());
    },
    setPage: (page: number) => {
      dispatch(setPageAC(page));
    },
    getMovies: (movie:string, page:number) => {
      dispatch(getMoviesThunkCreator(movie, page));
    },
    getNewMovies: (movie:string) => {
      dispatch(getNewMoviesThunkCreator(movie));
    },
    setCurrentSearch: (value:number) => {
      dispatch(setCurrentSearchAC(value));
    },
    setPopUpImg: (src:string) => {
      dispatch(setPopUpImgAC(src));
    },
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
