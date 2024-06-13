import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const url=`https://api.giphy.com/v1/gifs/random?api_key=9w5AENQRTwsJFeA0J9kLvZezTU69zgAV`;
function useGif(tag){

    const [Gif,setGif]=useState('');
    const [loding,setloding]=useState(false);

    async function fetch(){
        setloding(true);
        const Tagurl=tag?`${url}&tag=${tag}`:url;
        const {data}=await axios.get(Tagurl);
        console.log(data);
        const image=data.data.images.downsized_large.url;
        setGif(image);
        setloding(false);
    }
 useEffect(()=>{
    fetch();
 },[] );


return {Gif,loding,fetch};
}
export default useGif;