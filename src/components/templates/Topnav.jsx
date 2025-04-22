import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");

  return (
    <div className="w-full h-[10vh] relative  flex items-center justify-start ml-[20%]">
      <i class="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setquery(e.target.value)} value={query}
        className="w-[50%] text-zinc-200 text-xl  bg-transparent px-5 mx-6 outline-none border-none"
        type="text"
        placeholder="Search Anything"
      />
      {query.length>0 &&<i onClick={()=>setquery("")} class=" text-3xl text-zinc-400 ri-close-fill"></i>}
      <div className="bg-zinc-200 overflow-auto   w-[50%] absolute h-[50vh] top-[90%]">
        <Link className=" hover:text-black hover:bg-zinc-300 duration-300 w-full font-semibold transition-all text-zinc-600 flex item-center justify-start p-6 border-b-2 border-zinc-100 ">
          <img src="" alt="" />
          <span className="">hello eveyone</span>
        </Link>
        
      </div>
    </div>
  );
};

export default Topnav;
