const API_KEY = "b2dcd879";
export async function getMovies(movie, page) {
  const url = `https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
export async function getMovieById(id) {
  const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
export const fillArrayMoviesId = (arr) => arr.map((el) => el.imdbID);
getMovies("asfasfasfa", 1).then((res) => console.log(res));
getMovieById("tt1245526").then((res) => console.log(res));
