
import Loader from "./Loader";
import useGif from "./useGif";


function RandomGif(){
 
 const {Gif,loding,fetch}=useGif();
    return (
        <div className=" flex flex-col bg-green-400 w-1/2 mt-12 rounded-xl items-center border-2 border-blue-400 shadow-lg">
            <h1 className="text-center text-white text-2xl font-bold underline mb-6"> A RANDOM GIFS</h1>
            <div>{loding?<Loader></Loader>:<img src={Gif} alt="khk"></img>}</div>
            <button className="w-10/12 bg-orange-400 text-center text-white font-bold text-2xl mb-6 mt-4 border-2 border-green-400 rounded-xl h-10 shadow-lg" onClick={fetch}>GENRATE </button>
        </div>
    );
}
export default RandomGif;