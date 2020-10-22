const API_KEY = "b2dcd879";
export async function getMovies(movie, page) {
  const url = `https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${API_KEY}`;
  const res = await fetch(url);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }else{
    return 'bad request'
  }
  
}
export async function getMovieById(id) {
  const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  const res = await fetch(url);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }else{
    return 'bad request'
  }
}
export const fillArrayMoviesId = (arr) => arr.map((el) => el.imdbID);
