
const API_KEY='0be0b0ed07a4ac92637c26e1eff9949c'


const Request={
   requestpopular: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
   requestnowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
   requstedTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
   requestupComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
   requestnowpopular:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
   requestMovies: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`,
   requestTVshows: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
   // requestLatest:` https://api.themoviedb.org/3/movie/latest`,
   requestMovielist:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=16`,
   

}
export default Request;
