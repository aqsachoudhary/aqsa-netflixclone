const API_KEY = "cb6cf3406eeb5aaf18e9aeed77c9793c";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&WITH_geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&WITH_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&WITH_geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&WITH_geners=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&WITH_geners=99`,
};
export default request;
