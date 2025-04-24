import React, { useEffect, useState } from 'react';
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import axios from '../utils/axios'; 
import { Header } from './templates/Header';
import Horizontal from './templates/Horizontal';
import Dropdown from './templates/Dropdown';
import Loader from './Loader';

const Home = () => {
  document.title = "TrailerX | Homepage";
   const [wallpaper, setwallpaper] = useState(null);
   const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");

   const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      const random = data.results[Math.floor(Math.random() * data.results.length)];

      setwallpaper(random);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
        settrending(data.results)
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(()=>{
   !wallpaper && getHeaderWallpaper();
    getTrending();
  },[category])




  return wallpaper && trending ? (
    <div className="w-full h-screen flex overflow-x-hidden ">
      <Sidenav />
      <div className="w-[80%] overflow-auto overflow-x-hidden h-full">
        <Topnav />
        <Header data={wallpaper} />
        <div className="my-3 p-5  flex justify-between items-center">
        <h1 className="text-3xl  text-zinc-400 font-semibold">Trending</h1>
        <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setcategory(e.target.value)} />
        
      </div>
        <Horizontal data={trending}  />
      </div>
    </div>
  ):<Loader />
};

export default Home;
