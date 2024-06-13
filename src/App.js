import "./App.css"
import RandomGif from "./RandomGif";
import TagGif from "./TagGif";
function App(){
 
  return(
    <div className="bg-[url('./Image/bg.jpg')] w-full min-h-screen flex flex-col items-center  ">
      <h1 className="text-center w-10/12 mt-8 h-12 bg-white rounded-xl  font-bold text-4xl border-2 border-blue-400 shadow-lg">RANDOM GIFS</h1>
      <RandomGif></RandomGif>
      <TagGif></TagGif>
    </div>
  );
}
export default App;
