import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies } from "../util/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../util/constant";
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};
export default useTrendingMovies;
