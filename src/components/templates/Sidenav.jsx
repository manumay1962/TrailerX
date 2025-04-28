import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full p-10 border-r-[1px] border-zinc-400">
      <h1 className="text-white text-2xl font-bold">
        <i className=" text-[#6566CD] mr-2 ri-tv-fill"></i>
       <span> TrailerX</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold mt-10 mb-5">New Feeds</h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg  p-3 transition-all duration-300"><i className="ri-fire-fill mr-2"></i>Trending</Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i className="ri-magic-fill mr-3"></i>Popular</Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i className=" mr-3 ri-movie-2-ai-fill"></i>Movies</Link>
        <Link to="/tv"  className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i className=" mr-3 ri-tv-2-fill"></i>Tv Shows</Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i className="ri-team-fill mr-3"></i>People</Link>
      </nav>
      <hr className="mt-2 mb-2 border-none bg-zinc-200 h-[1px]" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
      <h1 className="text-white font-semibold mt-3">Website Information</h1>
        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i className="ri-information-fill mr-3"></i>About</Link>
        
        
      </nav>
    </div>
  );
};

export default Sidenav;
