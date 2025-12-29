const VideoTitle=({title,overview})=>{

   return (
   <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
   <h1 className="text-6xl font-bold">{title}</h1>
   <p className="py-6 text-lg w-2/4">{overview}</p>
   <div>
      <button className="bg-white text-black p-2 px-8 text-xl  rounded-lg hover:bg-opacity-70">▶️PLAY</button>
      <button className="bg-gray-300 mx-2 text-white p-2 px-8 text-xl  bg-opacity-50 rounded-lg hover:bg-opacity-70">MORE INFO.</button>
   </div>

   </div>)
}

export default VideoTitle;