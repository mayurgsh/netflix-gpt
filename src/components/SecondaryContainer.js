import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // const popularMovies=useSelector((store)=>store.movies.popularMovies)
  console.log("secondary", movies.nowPlayingMovies);
  return (
    <div className=" bg-black w-screen">
      <div className="-mt-42 relative z-20 pl-12">

      <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topratedMoves} />
      <MovieList title={"horror"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
