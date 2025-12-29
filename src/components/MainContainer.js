import { useSelector } from "react-redux";
import Videobackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";



const MainContainer=()=>{

  const Movies=useSelector((store)=>store.movies?.nowPlayingMovies);

  if(Movies===null) return ;

  const mainMovie=Movies[0];
  console.log(mainMovie);
  console.log("vie");

  const {original_title,overview,id}=mainMovie;
  


  return (<div>
    <VideoTitle title={original_title} overview={overview}/>
    <Videobackground movieId={id}/>
  </div>);
};

export default MainContainer;

 
