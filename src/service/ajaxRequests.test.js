import { getMovies, getMovieById, fillArrayMoviesId } from "./ajaxRequests";

test("get movies from imdbApi", () => {
  getMovies("bill", 1).then((res) => {
    expect(res.Search.length).toBe(10);
  });
});
test("get wrong movies from imdbApi", () => {
  getMovies("asfasfasd", 1).then((res) => {
    expect(res.Response).toBe("False");
  });
});
test("get movie by id from imdbApi", () => {
  getMovieById("tt1245526").then((res) => {
    expect(res.Title).toBe("RED");
  });
});
test("get movie by incorrect id from imdbApi", () => {
  getMovieById("tt464564645646546588854").then((res) => {
    expect(res.Response).toBe("False");
  });
});
test("fill arr by id", () => {
  const arr = [{ imdbID: 777 }];
  const res = fillArrayMoviesId(arr);
  expect(res[0]).toBe(777);
});
