import { useState } from "react";
import Loader from "./Loader";
import useGif from "./useGif";
function TagGif(){

    const [tag,settag]=useState("car");
const {Gif,loding,fetch}=useGif(tag);
    return(
        
 <div className=" flex flex-col bg-green-400 w-1/2 mt-12 rounded-xl items-center border-2 border-blue-400 shadow-lg">
            <h1 className="text-center text-white text-2xl font-bold underline mb-6">RANDOM {tag} GIFS</h1>
            <div>{loding?<Loader></Loader>:<img src={Gif} alt="khk"></img>}</div>
            <input className="w-10/12 bg-orange-400 text-center text-white font-bold text-2xl  mt-4 border-2 border-green-400 rounded-xl h-10 shadow-lg placeholder:text-white" placeholder="Enter Your Tag " onChange={(e)=>(settag(e.target.value))}></input>
            <button className="w-10/12 bg-orange-400 text-center text-white font-bold text-2xl mb-6 mt-4 border-2 border-green-400 rounded-xl h-10 shadow-lg" onClick={fetch}>GENRATE </button>
        </div>
        
    );
}
export default TagGif;