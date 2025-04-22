import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full p-10 border-r-[1px] border-zinc-400">
      <h1 className="text-white text-2xl font-bold">
        <i class=" text-[#6566CD] mr-2 ri-tv-fill"></i>
       <span> TrailerX</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold mt-10 mb-5">New Feeds</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg  p-3 transition-all duration-300"><i class="ri-fire-fill mr-2"></i>Trending</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i class="ri-magic-fill mr-3"></i>Popular</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i class=" mr-3 ri-movie-2-ai-fill"></i>Movies</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i class=" mr-3 ri-tv-2-fill"></i>Tv Shows</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i class="ri-team-fill mr-3"></i>People</Link>
      </nav>
      <hr className="mt-2 mb-2 border-none bg-zinc-200 h-[1px]" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
      <h1 className="text-white font-semibold mt-3">Website Information</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i class="ri-information-fill mr-3"></i>About</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 transition-all duration-300"><i class="ri-phone-fill mr-3"></i>Contact Us</Link>
        
      </nav>
    </div>
  );
};

export default Sidenav;
