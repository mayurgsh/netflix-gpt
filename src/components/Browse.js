
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTrendingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        Main Container
          -video background
          -VideoTitle
        Secondary Container
          -movieList *n 
          -cards * n
      */}
    </div>
  );
};
export default Browse;
