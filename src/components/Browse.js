import useNowPlayMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
       MainContainer
       -VideoBackground
       -VideoTitle
       SecondaryContainer
       - Movies List *n
         cards *n
       */}
    </div>
  );
};

export default Browse;
