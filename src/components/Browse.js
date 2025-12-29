
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";




const Browse=()=>{

  useNowPlayingMovies();
  console.log("Browse rendered");


  return(
    <div>
      <Header/>
     <MainContainer/>
      <SecondaryContainer/>
      </div>
  )
}

export default Browse;