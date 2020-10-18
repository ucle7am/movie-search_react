import reducer from "./reducer";
import {
  addMoviesToStateAC,
  changeInputAC,
  setCurrentSearchAC,
  setTotalPagesAC,
  toggleFecthAC,
} from "./actions";

test("add chars to input", () => {
  const state = {
    inputValue: "",
  };
  const action = changeInputAC("born");
  let newState = reducer(state, action);
  expect(newState.inputValue).toBe("born");
});
test("set current search in state", () => {
  const state = {
    currentSearch: "",
  };
  const action = setCurrentSearchAC("born");
  let newState = reducer(state, action);
  expect(newState.currentSearch).toBe("born");
});
test("toggle fetching", () => {
  const state = {
    isFetching: false,
  };
  const action = toggleFecthAC(true);
  let newState = reducer(state, action);
  expect(newState.isFetching).toBe(true);
});
test("add movies", () => {
  const state = {
    movieArr: [],
  };
  const movies = new Array(10).fill("movie");
  const action = addMoviesToStateAC(movies);
  let newState = reducer(state, action);
  expect(newState.movieArr.length).toBe(10);
});

test("add movies", () => {
  const state = {
    totalPages: 0,
  };
  const action = setTotalPagesAC(60);
  let newState = reducer(state, action);
  expect(newState.totalPages).toBe(6);
});
