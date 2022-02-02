const API_KEY = 'd0a89e21518eb34bf114239006a7498b';

const BASE_URL = 'https://api.themoviedb.org/3';

async function moviesApiService(url) {
    const response = await fetch(url);
    return response.ok
    ? response.json()
    : Promise.reject(new Error('Not found'));

}

export function getTrendingMovies() {
  return moviesApiService(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}
export function getMovieById(movieId) {
  return moviesApiService(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}
export function getMovieReviews(movieId) {
  return moviesApiService(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}
export function getMovieCast(movieId) {
  return moviesApiService(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}
export function getMoviesByQuery(query) {
  return moviesApiService( `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`)
}
