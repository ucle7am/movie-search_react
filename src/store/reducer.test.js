import reducer from "./reducer";
import { changeInputAC, setCurrentSearchAC, toggleFecthAC } from "./actions";

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
