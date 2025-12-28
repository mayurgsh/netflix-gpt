
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
 useNowPlayingMovies()
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
